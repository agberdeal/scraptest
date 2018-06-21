// Imports
var mongoose = require('mongoose');

var Alias = require('../model/alias');

 function carga1(){

    //Config
    var url_mongo="mongodb://localhost:27017/"
    var database="inversion"

    // Iniciamos conexion con base de datos
    mongoose.connect(url_mongo + database);


    // Ejecutamos carga de Alias
    console.log("inicio carga alias!");

    new Alias({tag:"ABENGOA",ticker:"ABG"}).save(); 
    new Alias({tag:"ABENGOA",ticker:"ABG.P"}).save(); 
    new Alias({tag:"ABERTIS",ticker:"ABE"}).save();
    new Alias({tag:"ACCIONA",ticker:"ANA"}).save();
    new Alias({tag:"ACERINOX",ticker:"ACX"}).save();
    new Alias({tag:"ACS",ticker:"ACS"}).save();
    new Alias({tag:"ADOLFO DOMÍNGUEZ",ticker:"ADZ"}).save();
    new Alias({tag:"ADVEO",ticker:"ADV"}).save();
    new Alias({tag:"AEDAS HOMES",ticker:"AEDAS"}).save();       
    new Alias({tag:"AENA",ticker:"AENA"}).save();
    new Alias({tag:"AIRBUS",ticker:"AIR"}).save();
    new Alias({tag:"ALANTRA",ticker:"ALNT"}).save();
    new Alias({tag:"ALBA",ticker:"ALB"}).save();             
    new Alias({tag:"ALMIRALL",ticker:"ALM"}).save();
    new Alias({tag:"AMADEUS IT GROUP",ticker:"AMS"}).save();
    new Alias({tag:"AMPER",ticker:"AMP"}).save();
    new Alias({tag:"APERAM",ticker:"APAM"}).save();
    new Alias({tag:"APPLUS",ticker:"APPS"}).save();
    new Alias({tag:"ARCELORMITTAL",ticker:"MTS"}).save();
    new Alias({tag:"ATRESMEDIA",ticker:"A3M"}).save();
    new Alias({tag:"AUDAX RENOVABLES",ticker:"ADX"}).save();
    new Alias({tag:"AXIARE PATRIMONIO SOCIMI",ticker:"AXIA"}).save();
    new Alias({tag:"AZKOYEN",ticker:"AZK"}).save();
    new Alias({tag:"BANCO SABADELL",ticker:"SAB"}).save();
    new Alias({tag:"BANKIA",ticker:"BKIA"}).save();
    new Alias({tag:"BANKINTER",ticker:"BKT"}).save();
    new Alias({tag:"BARÓN DE LEY",ticker:"BDL"}).save();
    new Alias({tag:"BAVIERA",ticker:"CBAV"}).save();            
    new Alias({tag:"BAYER",ticker:"BAY"}).save();
    new Alias({tag:"BBVA",ticker:"BBVA"}).save();
    new Alias({tag:"BIOSEARCH",ticker:"BIO"}).save();
    new Alias({tag:"BME",ticker:"BME"}).save();                   
    new Alias({tag:"BODEGAS RIOJANAS",ticker:"RIO"}).save();
    new Alias({tag:"BORGES AGRI BR",ticker:"BAIN"}).save();
    new Alias({tag:"C.A.F.",ticker:"CAF"}).save();           
    new Alias({tag:"CAIXABANK",ticker:"CABK"}).save();
    new Alias({tag:"CAM",ticker:"CAM"}).save();
    new Alias({tag:"CATALANA OCCIDENTE",ticker:"GCO"}).save();   
    new Alias({tag:"CELLNEX TELECOM",ticker:"CLNX"}).save();
    new Alias({tag:"CIE. AUTOMOTIVE",ticker:"CIE"}).save();
    new Alias({tag:"CLEOP",ticker:"CLEO"}).save();
    new Alias({tag:"COCA-COLA EUROP",ticker:"CCE"}).save();
    new Alias({tag:"CODERE",ticker:"CDR"}).save();
    new Alias({tag:"COEMAC",ticker:"CMC"}).save();
    new Alias({tag:"COLONIAL",ticker:"COL"}).save();
    new Alias({tag:"DEOLEO",ticker:"OLE"}).save();
    new Alias({tag:"DIA",ticker:"DIA"}).save();
    new Alias({tag:"DOGI",ticker:"DGI"}).save();
    new Alias({tag:"DURO FELGUERA",ticker:"MDF"}).save();
    new Alias({tag:"EBRO FOODS",ticker:"EBRO"}).save();
    new Alias({tag:"EDREAMS ODIGEO",ticker:"EDR"}).save();
    new Alias({tag:"ELECNOR",ticker:"ENO"}).save();
    new Alias({tag:"ENAGAS",ticker:"ENG"}).save();
    new Alias({tag:"ENCE",ticker:"ENC"}).save();
    new Alias({tag:"ENDESA",ticker:"ELE"}).save();
    new Alias({tag:"ERCROS",ticker:"ECR"}).save();
    new Alias({tag:"EUROPAC",ticker:"PAC"}).save();        
    new Alias({tag:"EUSKALTEL",ticker:"EKT"}).save();
    new Alias({tag:"EZENTIS",ticker:"EZE"}).save();
    new Alias({tag:"FAES",ticker:"FAE"}).save();
    new Alias({tag:"FCC",ticker:"FCC"}).save();
    new Alias({tag:"FERROVIAL",ticker:"FER"}).save();
    new Alias({tag:"FLUIDRA",ticker:"FDR"}).save();
    new Alias({tag:"FUNESPAÑA",ticker:"FUN"}).save();
    new Alias({tag:"GAM",ticker:"GALQ"}).save();
    new Alias({tag:"GAS NATURAL",ticker:"GAS"}).save();
    new Alias({tag:"GESTAMP",ticker:"GEST"}).save();
    new Alias({tag:"GLOBAL DOMINION ACCESS",ticker:"DOM"}).save();
    new Alias({tag:"GRENERGY RENOVABLES",ticker:"GRE"}).save();        
    new Alias({tag:"GRIFOLS",ticker:"GRF"}).save();
    new Alias({tag:"GRUPO EMP. SAN JOSE",ticker:"GSJ"}).save();
    new Alias({tag:"HISPANIA ACTIVOS INMOBILIARIOS",ticker:"HIS"}).save();
    new Alias({tag:"IAG",ticker:"IAG"}).save();
    new Alias({tag:"IBERDROLA",ticker:"IBE"}).save();
    new Alias({tag:"IBERPAPEL",ticker:"IBG"}).save();
    new Alias({tag:"INDITEX",ticker:"ITX"}).save();
    new Alias({tag:"INDRA",ticker:"IDR"}).save();
    new Alias({tag:"INMOBILIARIA DEL SUR",ticker:"ISUR"}).save();
    new Alias({tag:"INYPSA",ticker:"INY"}).save();
    new Alias({tag:"LABORATORIO REIG JOFRE",ticker:"RJF"}).save();
    new Alias({tag:"LAR ESPAÑA",ticker:"LRE"}).save();
    new Alias({tag:"LIBERBANK",ticker:"LBK"}).save();
    new Alias({tag:"LINGOTES",ticker:"LGT"}).save();
    new Alias({tag:"LOGISTA",ticker:"LOG"}).save();
    new Alias({tag:"MAPFRE",ticker:"MAP"}).save();
    new Alias({tag:"MASMOVIL",ticker:"MAS"}).save();      
    new Alias({tag:"MEDIASET",ticker:"TL5"}).save();
    new Alias({tag:"MELIÁ HOTELS",ticker:"MEL"}).save();
    new Alias({tag:"MERLIN PROP.",ticker:"MRL"}).save();
    new Alias({tag:"METROVACESA",ticker:"MVC"}).save();
    new Alias({tag:"MIQUEL COSTAS",ticker:"MCM"}).save();
    new Alias({tag:"MONTEBALITO",ticker:"MTB"}).save();
    new Alias({tag:"NATRA",ticker:"NAT"}).save();
    new Alias({tag:"NATURHOUSE HEALTH",ticker:"NTH"}).save();
    new Alias({tag:"NEINOR HOMES",ticker:"HOME"}).save();       
    new Alias({tag:"NH HOTEL GROUP",ticker:"NHH"}).save();
    new Alias({tag:"NICOLÁS CORREA",ticker:"NEA"}).save();
    new Alias({tag:"NYESA",ticker:"NYE"}).save();
    new Alias({tag:"OHL",ticker:"OHL"}).save();
    new Alias({tag:"ORYZON GENOMICS",ticker:"ORY"}).save();
    new Alias({tag:"PARQUES REUNIDOS",ticker:"PQR"}).save();
    new Alias({tag:"PESCANOVA",ticker:"PVA"}).save();
    new Alias({tag:"PHARMA MAR",ticker:"PHM"}).save();
    new Alias({tag:"PRIM",ticker:"PRM"}).save();
    new Alias({tag:"PRISA",ticker:"PRS"}).save();
    new Alias({tag:"PROSEGUR",ticker:"PSG"}).save();
    new Alias({tag:"PROSEGUR CASH",ticker:"CASH"}).save();
    new Alias({tag:"QUABIT",ticker:"QBT"}).save();
    new Alias({tag:"REALIA",ticker:"RLIA"}).save();
    new Alias({tag:"RED ELÉCTRICA",ticker:"REE"}).save();
    new Alias({tag:"RENO DE MEDICI",ticker:"RDM"}).save();
    new Alias({tag:"RENTA CORPORACION",ticker:"REN"}).save();
    new Alias({tag:"RENTA 4",ticker:"REP"}).save();
    new Alias({tag:"REPSOL",ticker:""}).save();
    new Alias({tag:"ROVI",ticker:"ROVI"}).save();
    new Alias({tag:"SACYR",ticker:"SCYR"}).save();
    new Alias({tag:"SAETA YIELD",ticker:"SAY"}).save();
    new Alias({tag:"SANTANDER",ticker:"SAN"}).save();
    new Alias({tag:"SERVICE POINT",ticker:"SPS"}).save();
    new Alias({tag:"SIEMENS GAMESA",ticker:"SGRE"}).save();
    new Alias({tag:"SNIACE",ticker:"SNC"}).save();
    new Alias({tag:"SOLARIA",ticker:"SLR"}).save();
    new Alias({tag:"TALGO",ticker:"TLGO"}).save();
    new Alias({tag:"TECNICAS REUNIDAS",ticker:"TRE"}).save();
    new Alias({tag:"TELEFÓNICA",ticker:"TEF"}).save();
    new Alias({tag:"TELEPIZZA GROUP",ticker:"TPZ"}).save();
    new Alias({tag:"TUBACEX",ticker:"TUB"}).save();
    new Alias({tag:"TUBOS REUNIDOS",ticker:"TRG"}).save();
    new Alias({tag:"UNICAJA BANCO",ticker:"UNI"}).save();
    new Alias({tag:"URBAS",ticker:"UBS"}).save();
    new Alias({tag:"VERTICE",ticker:"VER"}).save();
    new Alias({tag:"VIDRALA",ticker:"VID"}).save();
    new Alias({tag:"VISCOFAN",ticker:"VIS"}).save();
    new Alias({tag:"VOCENTO",ticker:"VOC"}).save();
    new Alias({tag:"ZARDOYA OTIS",ticker:"ZOT"}).save();

    console.log("fin carga alias!");
};

module.exports.carga1 = carga1;