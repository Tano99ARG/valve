/* =====================================================================
   LISTINO INSUMI VALVE ELECTRONICS
   ---------------------------------------------------------------------
   File unico letto sia dal Preventivatore sia dal Magazzino: cosi' un
   prezzo lo correggi una volta sola e vale in entrambi i posti.

   PREZZI: valori di mercato 2026 (IVA esclusa), rilevati da listini
   pubblici di distributori italiani. Un distributore puo' scostare anche
   del 30%: verifica sul TUO listino e correggi qui.

   'acq' = prezzo di acquisto al professionista (rotolo da 50 m, bossa,
           confezione). E' il costo reale per l'installatore, non il prezzo
           al dettaglio del negozio.

   'ven' = prezzo di vendita al cliente. Se e' 0 viene calcolato con il
           margine della categoria (vedi MARGINE). Se lo compili a mano
           vince quello.

   'un'  = unita' di vendita: mt (metro) o pz (pezzo).
   'sp'  = spessore, 'mis' = misura/diametro. Sono i campi che cercano
           quando dici "il tubo da 12", quindi vanno mostrati bene.
   ===================================================================== */

window.INSUMI = [

/* ─── TUBO RAME NON ISOLATO 0,6 mm — split residenziali ─── */
{sku:'RA06-014',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'1/4"',sp:'0,6 mm',un:'mt',acq:1.60},
{sku:'RA06-038',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'3/8"',sp:'0,6 mm',un:'mt',acq:2.45},
{sku:'RA06-012',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'1/2"',sp:'0,6 mm',un:'mt',acq:3.40},
{sku:'RA06-058',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'5/8"',sp:'0,7 mm',un:'mt',acq:4.90},
{sku:'RA06-034',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'3/4"',sp:'0,7 mm',un:'mt',acq:6.40},
{sku:'RA06-078',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'7/8"',sp:'0,8 mm',un:'mt',acq:8.30},
{sku:'RA06-100',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'1"',sp:'0,8 mm',un:'mt',acq:10.20},
{sku:'RA06-114',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'1"1/4',sp:'0,9 mm',un:'mt',acq:13.80},
{sku:'RA06-118',cat:'Tubo rame 0,6',nome:'Tubo rame liscio',mis:'1"1/2',sp:'1,0 mm',un:'mt',acq:19.00},

/* ─── TUBO RAME 0,8 mm — R32 / R410A, media pressione ─── */
{sku:'RA08-014',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'1/4"',sp:'0,8 mm',un:'mt',acq:2.10},
{sku:'RA08-038',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'3/8"',sp:'0,8 mm',un:'mt',acq:3.20},
{sku:'RA08-012',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'1/2"',sp:'0,8 mm',un:'mt',acq:4.40},
{sku:'RA08-058',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'5/8"',sp:'0,8 mm',un:'mt',acq:6.20},
{sku:'RA08-034',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'3/4"',sp:'0,8 mm',un:'mt',acq:8.10},
{sku:'RA08-078',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'7/8"',sp:'0,8 mm',un:'mt',acq:10.40},
{sku:'RA08-100',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'1"',sp:'0,8 mm',un:'mt',acq:12.80},
{sku:'RA08-114',cat:'Tubo rame 0,8',nome:'Tubo rame liscio',mis:'1"1/4',sp:'0,9 mm',un:'mt',acq:16.40},

/* ─── TUBO RAME 1,0 mm — spesso, alta pressione, acqua e gas ─── */
{sku:'RA10-010',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'10 mm',sp:'1,0 mm',un:'mt',acq:8.20},
{sku:'RA10-012',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'12 mm',sp:'1,0 mm',un:'mt',acq:9.80},
{sku:'RA10-014',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'14 mm',sp:'1,0 mm',un:'mt',acq:11.50},
{sku:'RA10-015',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'15 mm',sp:'1,0 mm',un:'mt',acq:12.30},
{sku:'RA10-016',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'16 mm',sp:'1,0 mm',un:'mt',acq:13.20},
{sku:'RA10-018',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'18 mm',sp:'1,0 mm',un:'mt',acq:14.80},
{sku:'RA10-022',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'22 mm',sp:'1,0 mm',un:'mt',acq:18.50},
{sku:'RA10-028',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'28 mm',sp:'1,0 mm',un:'mt',acq:23.50},
{sku:'RA10-035',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'35 mm',sp:'1,0 mm',un:'mt',acq:30.00},
{sku:'RA10-042',cat:'Tubo rame 1,0',nome:'Tubo rame liscio',mis:'42 mm',sp:'1,0 mm',un:'mt',acq:41.00},

/* ─── TUBO RAME ISOLATO — non serve isolare sul tratto esterno ─── */
{sku:'RAI6-014',cat:'Tubo rame isolato',nome:'Tubo rame isolato 6 mm',mis:'1/4"',sp:'0,8 mm',un:'mt',acq:4.50,note:'rivestimento 6 mm'},
{sku:'RAI6-038',cat:'Tubo rame isolato',nome:'Tubo rame isolato 6 mm',mis:'3/8"',sp:'0,8 mm',un:'mt',acq:7.00,note:'rivestimento 6 mm'},
{sku:'RAI6-012',cat:'Tubo rame isolato',nome:'Tubo rame isolato 6 mm',mis:'1/2"',sp:'0,8 mm',un:'mt',acq:10.20,note:'rivestimento 6 mm'},
{sku:'RAI6-058',cat:'Tubo rame isolato',nome:'Tubo rame isolato 6 mm',mis:'5/8"',sp:'1,0 mm',un:'mt',acq:16.80,note:'rivestimento 6 mm'},
{sku:'RAI9-014',cat:'Tubo rame isolato',nome:'Tubo rame isolato 9 mm',mis:'1/4"',sp:'0,8 mm',un:'mt',acq:5.90,note:'rivestimento 9 mm'},
{sku:'RAI9-038',cat:'Tubo rame isolato',nome:'Tubo rame isolato 9 mm',mis:'3/8"',sp:'0,8 mm',un:'mt',acq:8.90,note:'rivestimento 9 mm'},

/* ─── TUBI FLESSIBILI E RACCORDERI ─── */
{sku:'FLE-014',cat:'Flessibili',nome:'Tubo flessibile intrecciato inox',mis:'1/2" (14 mm)',sp:'',un:'mt',acq:4.20},
{sku:'FLE-018',cat:'Flessibili',nome:'Tubo flessibile intrecciato inox',mis:'3/4" (19 mm)',sp:'',un:'mt',acq:6.10},
{sku:'FLE-025',cat:'Flessibili',nome:'Tubo flessibile intrecciato inox',mis:'1" (25 mm)',sp:'',un:'mt',acq:9.80},
{sku:'RACC-CU3',cat:'Flessibili',nome:'Curva 90° ottone 3 vie',mis:'1/4"',sp:'',un:'pz',acq:4.80},
{sku:'RACC-CU38',cat:'Flessibili',nome:'Curva 90° ottone 3 vie',mis:'3/8"',sp:'',un:'pz',acq:5.60},
{sku:'RACC-CU12',cat:'Flessibili',nome:'Curva 90° ottone 3 vie',mis:'1/2"',sp:'',un:'pz',acq:6.90},
{sku:'RACC-UN12',cat:'Flessibili',nome:'Raccordo unione ottone',mis:'1/4"',sp:'',un:'pz',acq:2.40},
{sku:'RACC-UN38',cat:'Flessibili',nome:'Raccordo unione ottone',mis:'3/8"',sp:'',un:'pz',acq:2.80},

/* ─── COLLA D'ACCIAIO INOX (saldature robuste) ─── */
{sku:'PRS-016',cat:'Pressfitting inox',nome:'Tubo inox AISI 304 pressione',mis:'16 mm',sp:'1,0 mm',un:'mt',acq:11.90},
{sku:'PRS-020',cat:'Pressfitting inox',nome:'Tubo inox AISI 304 pressazione',mis:'20 mm',sp:'1,0 mm',un:'mt',acq:14.60},
{sku:'PRS-025',cat:'Pressfitting inox',nome:'Tubo inox AISI 304 pressazione',mis:'25 mm',sp:'1,0 mm',un:'mt',acq:19.80},
{sku:'PRS-032',cat:'Pressfitting inox',nome:'Tubo inox AISI 304 pressazione',mis:'32 mm',sp:'1,2 mm',un:'mt',acq:27.50},
{sku:'PRS-040',cat:'Pressfitting inox',nome:'Tubo inox AISI 304 pressazione',mis:'40 mm',sp:'1,2 mm',un:'mt',acq:38.90},

/* ─── CANALINE E TUBAZIONI ELETTRICHE ─── */
{sku:'CAN-020',cat:'Canalina elettrica',nome:'Canalina rigida tonda',mis:'20 mm (2 moduli)',sp:'',un:'pz',acq:1.90,note:'barra 2 m'},
{sku:'CAN-025',cat:'Canalina elettrica',nome:'Canalina rigida tonda',mis:'25 mm (3-4 moduli)',sp:'',un:'pz',acq:2.60,note:'barra 2 m'},
{sku:'CAN-032',cat:'Canalina elettrica',nome:'Canalina rigida tonda',mis:'32 mm (5-6 moduli)',sp:'',un:'pz',acq:3.50,note:'barra 2 m'},
{sku:'CAN-040',cat:'Canalina elettrica',nome:'Canalina rigida tonda',mis:'40 mm (8-9 moduli)',sp:'',un:'pz',acq:4.80,note:'barra 2 m'},
{sku:'CAN-F20',cat:'Canalina elettrica',nome:'Canalina flessibile',mis:'20 mm',sp:'',un:'mt',acq:0.95},
{sku:'CAN-F25',cat:'Canalina elettrica',nome:'Canalina flessibile',mis:'25 mm',sp:'',un:'mt',acq:1.20},
{sku:'CAN-F32',cat:'Canalina elettrica',nome:'Canalina flessibile',mis:'32 mm',sp:'',un:'mt',acq:1.55},
{sku:'CUP-020',cat:'Canalina elettrica',nome:'Curva 90° canalina',mis:'20 mm',sp:'',un:'pz',acq:0.60},
{sku:'CUP-025',cat:'Canalina elettrica',nome:'Curva 90° canalina',mis:'25 mm',sp:'',un:'pz',acq:0.75},
{sku:'GUA-020',cat:'Canalina elettrica',nome:'Guida-cavo completa',mis:'20 mm',sp:'',un:'mt',acq:1.45},
{sku:'DAT-020',cat:'Canalina elettrica',nome:'Dado di bloccaggio',mis:'20 mm',sp:'',un:'pz',acq:0.10,note:'confezione 100 pezzi'},
{sku:'FAS-204',cat:'Canalina elettrica',nome:'Fascetta nylon',mis:'200 × 4,8 mm',sp:'',un:'pz',acq:0.20,note:'confezione 100 pezzi'},
{sku:'FAS-304',cat:'Canalina elettrica',nome:'Fascetta nylon',mis:'300 × 4,8 mm',sp:'',un:'pz',acq:0.28,note:'confezione 100 pezzi'},
{sku:'FAS-365',cat:'Canalina elettrica',nome:'Fascetta nylon',mis:'365 × 4,8 mm',sp:'',un:'pz',acq:0.35,note:'confezione 100 pezzi'},

/* ─── CAVI E CONDUTTORI ─── */
{sku:'CAB-015',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 1,5 mm²',sp:'',un:'mt',acq:0.75},
{sku:'CAB-025',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 2,5 mm²',sp:'',un:'mt',acq:1.05},
{sku:'CAB-040',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 4 mm²',sp:'',un:'mt',acq:1.70},
{sku:'CAB-060',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 6 mm²',sp:'',un:'mt',acq:2.60},
{sku:'CAB-100',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 10 mm²',sp:'',un:'mt',acq:4.40},
{sku:'CAB-160',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 16 mm²',sp:'',un:'mt',acq:7.10},
{sku:'CAB-250',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 25 mm²',sp:'',un:'mt',acq:11.20},
{sku:'CAB-350',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 35 mm²',sp:'',un:'mt',acq:15.60},
{sku:'CAB-500',cat:'Cavi',nome:'Cavo flessibile FS-M',mis:'1 × 50 mm²',sp:'',un:'mt',acq:22.40},
{sku:'CAB-TPR15',cat:'Cavi',nome:'Cavo TPR per split',mis:'2 × 1,5 + 1,5 mm²',sp:'',un:'mt',acq:3.40,note:'conterghezzo per clima'},
{sku:'CAB-TPR25',cat:'Cavi',nome:'Cavo TPR per split',mis:'3 × 2,5 + 2,5 mm²',sp:'',un:'mt',acq:5.20,note:'conterghezzo per clima'},

/* ─── COMPONENTI ELETTRICI ─── */
{sku:'CAS-T116',cat:'Componenti elettrici',nome:'Cassetta tonda da incasso',mis:'Ø 116 mm',sp:'',un:'pz',acq:2.40},
{sku:'CAS-R3',cat:'Componenti elettrici',nome:'Cassetta rettangolare 3 moduli',mis:'3 moduli',sp:'',un:'pz',acq:2.20},
{sku:'CAS-R4',cat:'Componenti elettrici',nome:'Cassetta rettangolare 4 moduli',mis:'4 moduli',sp:'',un:'pz',acq:2.60},
{sku:'COP-1M',cat:'Componenti elettrici',nome:'Copriplastica',mis:'1 modulo',sp:'',un:'pz',acq:0.45},
{sku:'COP-2M',cat:'Componenti elettrici',nome:'Copriplastica',mis:'2 moduli',sp:'',un:'pz',acq:0.70},
{sku:'MOR-PE',cat:'Componenti elettrici',nome:'Morsetto di terra verde/giallo',mis:'4 mm²',sp:'',un:'pz',acq:0.35,note:'confezione 50 pezzi'},
{sku:'MOR-PE6',cat:'Componenti elettrici',nome:'Morsetto di terra verde/giallo',mis:'6 mm²',sp:'',un:'pz',acq:0.42,note:'confezione 50 pezzi'},
{sku:'TER-16',cat:'Componenti elettrici',nome:' morsetto a capovolto',mis:'16-25 mm²',sp:'',un:'pz',acq:0.85},
{sku:'PIE-060',cat:'Componenti elettrici',nome:'Pietra terminale',mis:'6/10 mm²',sp:'',un:'pz',acq:0.30},
{sku:'MAR-060',cat:'Componenti elettrici',nome:'Segnaletica di marcatura',mis:'6/10 mm²',sp:'',un:'pz',acq:0.28},

/* ─── ACCESSORI CLIMA ─── */
{sku:'VAL-014',cat:'Accessori clima',nome:'Valvola di sezionamento',mis:'1/4"',sp:'',un:'pz',acq:7.50},
{sku:'VAL-038',cat:'Accessori clima',nome:'Valvola di sezionamento',mis:'3/8"',sp:'',un:'pz',acq:8.50},
{sku:'VAL-012',cat:'Accessori clima',nome:'Valvola di sezionamento',mis:'1/2"',sp:'',un:'pz',acq:10.20},
{sku:'GIR-014',cat:'Accessori clima',nome:'Giunto di recupero',mis:'1/4"',sp:'',un:'pz',acq:1.20},
{sku:'GIR-038',cat:'Accessori clima',nome:'Giunto di recupero',mis:'3/8"',sp:'',un:'pz',acq:1.45},
{sku:'GIR-012',cat:'Accessori clima',nome:'Giunto di recupero',mis:'1/2"',sp:'',un:'pz',acq:1.80},
{sku:'NAR-19',cat:'Accessori clima',nome:'Nastro isolante autoadesivo',mis:'19 mm × 20 m',sp:'',un:'rz',acq:2.20},
{sku:'NAR-25',cat:'Accessori clima',nome:'Nastro isolante autoadesivo',mis:'25 mm × 20 m',sp:'',un:'rz',acq:3.10},
{sku:'COI-19',cat:'Accessori clima',nome:'Coibentazione espansa',mis:'19 × 13 mm × 1,2 m',sp:'',un:'pz',acq:1.90},
{sku:'COI-29',cat:'Accessori clima',nome:'Coibentazione espansa',mis:'29 × 19 mm × 1,2 m',sp:'',un:'pz',acq:3.40},
{sku:'PAS-014',cat:'Accessori clima',nome:'Pasta brasante e flussante',mis:'—',sp:'',un:'pz',acq:8.90},
{sku:'DRA-14',cat:'Accessori clima',nome:'Drenaggio tubazione split',mis:'1/4"',sp:'',un:'pz',acq:4.60},
{sku:'STA-UN',cat:'Accessori clima',nome:'Staffa a parete per unità esterna',mis:'universale',sp:'',un:'pz',acq:9.80},
{sku:'ANT-01',cat:'Accessori clima',nome:'Antivibrante per unità esterna',mis:'—',sp:'',un:'pz',acq:6.40},

/* ─── TUBI PVC ─── */
{sku:'PVC-032',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 32 mm',sp:'1,8 mm',un:'mt',acq:2.10},
{sku:'PVC-040',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 40 mm',sp:'1,8 mm',un:'mt',acq:2.70},
{sku:'PVC-050',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 50 mm',sp:'2,0 mm',un:'mt',acq:3.40},
{sku:'PVC-075',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 75 mm',sp:'2,2 mm',un:'mt',acq:4.90},
{sku:'PVC-110',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 110 mm',sp:'2,7 mm',un:'mt',acq:7.20,note:'barra 3 m'},
{sku:'PVC-125',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 125 mm',sp:'2,7 mm',un:'mt',acq:9.80,note:'barra 3 m'},
{sku:'PVC-160',cat:'PVC scarichi',nome:'Tubo PVC-U fogna',mis:'Ø 160 mm',sp:'3,2 mm',un:'mt',acq:15.40,note:'barra 3 m'},
{sku:'PVC-C32',cat:'PVC scarichi',nome:'Curva PVC-U 90°',mis:'Ø 32 mm',sp:'',un:'pz',acq:0.85},
{sku:'PVC-C50',cat:'PVC scarichi',nome:'Curva PVC-U 90°',mis:'Ø 50 mm',sp:'',un:'pz',acq:1.20},
{sku:'PVC-C75',cat:'PVC scarichi',nome:'Curva PVC-U 90°',mis:'Ø 75 mm',sp:'',un:'pz',acq:1.95},
{sku:'PVC-C110',cat:'PVC scarichi',nome:'Curva PVC-U 90°',mis:'Ø 110 mm',sp:'',un:'pz',acq:3.40},
{sku:'PVC-M110',cat:'PVC scarichi',nome:'Manicotto PVC-U',mis:'Ø 110 mm',sp:'',un:'pz',acq:2.60},
{sku:'PVC-R110',cat:'PVC scarichi',nome:'Riduzione PVC-U',mis:'Ø 110 → 50 mm',sp:'',un:'pz',acq:2.30},

/* ─── IDRAULICA E SIGILLANTI ─── */
{sku:'TEF-12',cat:'Idraulica',nome:'Nastro in PTFE per filettatura',mis:'12 m × 12 mm',sp:'',un:'pz',acq:1.20},
{sku:'COL-250',cat:'Idraulica',nome:'Colla PVC-U rapida',mis:'250 g',sp:'',un:'pz',acq:6.50},
{sku:'SIG-300',cat:'Idraulica',nome:'Silicone neutro trasparente',mis:'300 ml',sp:'',un:'pz',acq:4.20},
{sku:'SIG-500',cat:'Idraulica',nome:'Silicone acido a presa rapida',mis:'500 ml',sp:'',un:'pz',acq:5.90},
{sku:'SCH-20',cat:'Idraulica',nome:'Schiuma poliuretanica',mis:'750 ml con straw',sp:'',un:'pz',acq:5.40},

/* ─── CONSUMABILI DI CANTIERE ─── */
{sku:'GUA-PR16',cat:'Consumabili',nome:'Guanti da lavoro',mis:'—',sp:'',un:'pa',acq:4.50,note:'paio'},
{sku:'GUA-EST',cat:'Consumabili',nome:'Guanti da lavoro',mis:'—',sp:'',un:'pa',acq:9.80,note:'paio, antiseglio'},
{sku:'STR-IND',cat:'Consumabili',nome:'Straccio industriale',mis:'—',sp:'',un:'kg',acq:2.80},
{sku:'BUR-006',cat:'Consumabili',nome:'Punta trapano',mis:'Ø 6 mm',sp:'',un:'pz',acq:3.20},
{sku:'BUR-008',cat:'Consumabili',nome:'Punta trapano',mis:'Ø 8 mm',sp:'',un:'pz',acq:3.20},
{sku:'BUR-010',cat:'Consumabili',nome:'Punta trapano',mis:'Ø 10 mm',sp:'',un:'pz',acq:3.60},
{sku:'BUR-012',cat:'Consumabili',nome:'Punta carotatrice',mis:'Ø 12 mm',sp:'',un:'pz',acq:8.40},
{sku:'DIS-115',cat:'Consumabili',nome:'Disco da taglio',mis:'Ø 115 mm',sp:'',un:'pz',acq:1.40},
{sku:'ROC-01',cat:'Consumabili',nome:'Roccia e tasselli per tasselli 6-8',mis:'—',sp:'',un:'pz',acq:0.28},
{sku:'ETT-01',cat:'Consumabili',nome:'Etichette segnaletiche',mis:'—',sp:'',un:'pz',acq:0.15,note:'blocco 100 pezzi'},
{sku:'PRO-01',cat:'Consumabili',nome:'Pellicola protettiva',mis:'—',sp:'',un:'mt',acq:1.10},
];

/* ─── margine di vendita per categoria (se 'ven' vale 0) ─── */
window.INSUMI_MARGINE = {
  'Tubo rame 0,6':1.70,'Tubo rame 0,8':1.70,'Tubo rame 1,0':1.60,
  'Tubo rame isolato':1.65,'Flessibili':1.70,'Pressfitting inox':1.60,
  'Canalina elettrica':1.80,'Cavi':1.70,'Componenti elettrici':1.90,
  'Accessori clima':1.80,'PVC scarichi':1.75,'Idraulica':1.80,
  'Consumabili':2.20
};

/* ─── derivata i prezzi di vendita ─── */
window.INSUMI.forEach(function(it){
  var m = window.INSUMI_MARGINE[it.cat] || 1.7;
  it.margine = m;
  if(!it.ven) it.ven = Math.round(it.acq * m * 100) / 100;
});

/* ─── helpers condivisi ─── */
window.INSUMI_CATS = (function(){
  var s = {};
  window.INSUMI.forEach(function(i){ s[i.cat] = 1; });
  return Object.keys(s).sort();
})();

window.insumiTrova = function(testo){
  var q = String(testo||'').toLowerCase().trim();
  if(!q) return window.INSUMI;
  // uno SKU digitato per intero deve trovare SOLO se': 'MOR-PE' non deve
  // pescare anche MOR-PE6, altrimenti si rischia di scegliere l'articolo
  // sbagliato in magazzino o in preventivo
  var esatto = window.INSUMI.filter(function(i){
    return String(i.sku||'').toLowerCase() === q;
  });
  if(esatto.length) return esatto;
  return window.INSUMI.filter(function(i){
    return (i.nome||'').toLowerCase().indexOf(q) > -1
        || (i.sku||'').toLowerCase().indexOf(q) > -1
        || (i.cat||'').toLowerCase().indexOf(q) > -1
        || (i.mis||'').toLowerCase().indexOf(q) > -1
        || (i.sp||'').toLowerCase().indexOf(q) > -1;
  });
};

window.insumiEtichetta = function(i){
  var s = i.nome || '';
  if(i.mis && i.mis !== '—') s += ' ' + i.mis;
  if(i.sp) s += ' × ' + i.sp;
  return s;
};
