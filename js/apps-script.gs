/* =====================================================================
   MAGAZZINO VALVE ELECTRONICS — Google Apps Script (backend)
   ---------------------------------------------------------------------
   COME USARLO (5 minuti, una volta sola):
   1. Apri https://sheets.new  e crea un foglio "Magazzino Valve"
   2. Menu: Estensioni > Apps Script
   3. Incolla TUTTO questo codice nell'editor, sostituendo quello che c'era
   4. Salva (Ctrl+S)
   5. Incolla qui sotto l'ID del foglio (compare nell'URL tra /d/ e /edit)

      function setup() { setSpreadsheetId('COLLA_INQUI_L_ID'); }

      e poi ESEGUI setup() una volta (scegli la funzione "setup" nel menu
      a tendina e premi Esegui). Autorizza quando Google chiede.
   6. Menu: Deploy > New deployment
      - Type: Web app
      - Execute as: Me
      - Who has access: Anyone          <-- FONDAMENTALE
      - Deploy
   7. Ti compare "Web app URL" (tipo https://script.google.com/macros/s/XXXX/exec)
      Copialo e incollalo nell'app Magazzino, scheda Impostazioni.
   ===================================================================== */

var SS_ID = '';        // <- la imposta setup()

/* ------------------------------------------------------------------ */
function setSpreadsheetId(id) {
  SS_ID = String(id).trim();
  PropertiesService.getScriptProperties().setProperty('SS_ID', SS_ID);
  var ss = SpreadsheetApp.openById(SS_ID);
  initSheet(ss);
  return 'OK: foglio pronto, id ' + SS_ID;
}

function getSs() {
  var id = SS_ID || PropertiesService.getScriptProperties().getProperty('SS_ID');
  if (!id) throw new Error('ID foglio non impostato. Esegui setup().');
  return SpreadsheetApp.openById(id);
}

var HEAD = ['id','updatedAt','deleted','barcode','sku','name','category','unit',
            'qty','minQty','price','sellPrice','supplier','location','notes','thumb'];

/* crea le intestazioni e le colonne se il foglio e' vuoto */
function initSheet(ss) {
  var sh = ss.getSheetByName('Prodotti') || ss.insertSheet('Prodotti');
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEAD.length)
      .setFontWeight('bold').setBackground('#1B2A4A').setFontColor('#ffffff');
    sh.setColumnWidth(1, 200);
    sh.setColumnWidth(6, 240);
    sh.setColumnWidth(16, 60);
    sh.getRange('A:A').setNumberFormat('@');   // id testuale
    sh.getRange('D:E').setNumberFormat('@');   // barcode e sku testuali
  }
  return sh;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ------------------------------------------------------------------
   LETTURA:  GET  ?since=<millisecondi>
   Restituisce solo le righe modificate dopo 'since'.
   ------------------------------------------------------------------ */
function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var since = Number((e.parameter && e.parameter.since) || 0);
    var sh = initSheet(getSs());
    var last = sh.getLastRow();
    if (last < 2) return json({ ok: true, rows: [], now: Date.now() });

    var vals = sh.getRange(2, 1, last - 1, HEAD.length).getValues();
    var out = [];
    for (var i = 0; i < vals.length; i++) {
      var r = vals[i];
      if (r[0] === '' || r[0] === null) continue;
      var upd = Number(r[1]) || 0;
      if (upd > since) out.push(rowToObj(r));
    }
    return json({ ok: true, rows: out, now: Date.now(), total: vals.length });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) });
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------
   SCRITTURA:  POST  payload=<json url-encoded>
   body application/x-www-form-urlencoded => niente preflight CORS
   Scrive per ID: se esiste aggiorna, altrimenti accoda.
   ------------------------------------------------------------------ */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var raw = (e.parameter && e.parameter.payload) || '{}';
    var data = JSON.parse(raw);
    var items = data.rows || [];
    if (!items.length) return json({ ok: true, written: 0, now: Date.now() });

    var sh = initSheet(getSs());
    var last = sh.getLastRow();
    var index = {};                       // id -> riga
    if (last >= 2) {
      var ids = sh.getRange(2, 1, last - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) {
        if (ids[i][0] !== '' && ids[i][0] !== null) index[String(ids[i][0])] = i + 2;
      }
    }

    var toAppend = [];
    var touched = [];
    for (var k = 0; k < items.length; k++) {
      var it = items[k];
      if (!it || !it.id) continue;
      var row = objToRow(it);
      if (index[it.id]) {
        sh.getRange(index[it.id], 1, 1, HEAD.length).setValues([row]);
        touched.push(it.id);
      } else {
        toAppend.push(row);
        touched.push(it.id);
      }
    }
    if (toAppend.length) {
      sh.getRange(sh.getLastRow() + 1, 1, toAppend.length, HEAD.length).setValues(toAppend);
    }
    return json({ ok: true, written: touched.length, ids: touched, now: Date.now() });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) });
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------ */
function rowToObj(r) {
  return {
    id:        String(r[0]),
    updatedAt: Number(r[1]) || 0,
    deleted:   r[2] === true || r[2] === 'true' || r[2] === 1,
    barcode:   r[3] === '' ? null : String(r[3]),
    sku:       r[4] === '' ? null : String(r[4]),
    name:      String(r[5]),
    category:  r[6] === '' ? null : String(r[6]),
    unit:      r[7] === '' ? 'pz' : String(r[7]),
    qty:       Number(r[8]) || 0,
    minQty:    Number(r[9]) || 0,
    price:     Number(r[10]) || 0,
    sellPrice: Number(r[11]) || 0,
    supplier:  r[12] === '' ? null : String(r[12]),
    location:  r[13] === '' ? null : String(r[13]),
    notes:     r[14] === '' ? null : String(r[14]),
    thumb:     r[15] === '' ? null : String(r[15])
  };
}

function objToObj(o) { return o; }

function objToRow(o) {
  return [
    String(o.id),
    Number(o.updatedAt) || Date.now(),
    o.deleted ? 'true' : 'false',
    o.barcode == null ? '' : String(o.barcode),
    o.sku == null ? '' : String(o.sku),
    String(o.name || ''),
    o.category == null ? '' : String(o.category),
    o.unit == null ? 'pz' : String(o.unit),
    Number(o.qty) || 0,
    Number(o.minQty) || 0,
    Number(o.price) || 0,
    Number(o.sellPrice) || 0,
    o.supplier == null ? '' : String(o.supplier),
    o.location == null ? '' : String(o.location),
    o.notes == null ? '' : String(o.notes),
    o.thumb == null ? '' : String(o.thumb)
  ];
}

/* utility: avvia l'installazione guidata dal menu dell'editor */
function setup() {
  var ui = SpreadsheetApp.getUi();
  var id = ui.prompt('Incolla qui l\'ID del foglio (quello tra /d/ e /edit)',
                     SpreadsheetApp.getActiveSpreadsheet().getId(),
                     ui.ButtonSet.OK_CANCEL);
  if (id.getSelectedButton() !== ui.Button.OK) return;
  setSpreadsheetId(id.getResponseText());
  ui.alert('Foglio pronto. Ora: Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.');
}
