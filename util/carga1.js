module.exports.carga1 = function(em) {

    'use strict'
    
    // Imports
    const Ticker = require('../model/ticker');
    const Mercado = require('../model/mercado');
 
    // Ejecutamos carga de Mercados
    new Mercado({ mercadoID: "BME", nombre: "Bolsa de Madrid", pais: "ES"} ).save();
    
    // Ejecutamos carga de tickers
    new Ticker({ tag: "ABENGOA", ticker: "ABG" }).save();
    new Ticker({ tag: "ABENGOA", ticker: "ABG.P" }).save();
    new Ticker({ tag: "ABERTIS", ticker: "ABE" }).save();
    new Ticker({ tag: "ACCIONA", ticker: "ANA" }).save();
    new Ticker({ tag: "ACERINOX", ticker: "ACX" }).save();
    new Ticker({ tag: "ACS", ticker: "ACS" }).save();
    new Ticker({ tag: "ADOLFO DOMÍNGUEZ", ticker: "ADZ" }).save();
    new Ticker({ tag: "ADVEO", ticker: "ADV" }).save();
    new Ticker({ tag: "AEDAS HOMES", ticker: "AEDAS" }).save();
    new Ticker({ tag: "AENA", ticker: "AENA" }).save();
    new Ticker({ tag: "AIRBUS", ticker: "AIR" }).save();
    new Ticker({ tag: "ALANTRA", ticker: "ALNT" }).save();
    new Ticker({ tag: "ALBA", ticker: "ALB" }).save();
    new Ticker({ tag: "ALMIRALL", ticker: "ALM" }).save();
    new Ticker({ tag: "AMADEUS IT GROUP", ticker: "AMS" }).save();
    new Ticker({ tag: "AMPER", ticker: "AMP" }).save();
    new Ticker({ tag: "APERAM", ticker: "APAM" }).save();
    new Ticker({ tag: "APPLUS", ticker: "APPS" }).save();
    new Ticker({ tag: "ARCELORMITTAL", ticker: "MTS" }).save();
    new Ticker({ tag: "ATRESMEDIA", ticker: "A3M" }).save();
    new Ticker({ tag: "AUDAX RENOVABLES", ticker: "ADX" }).save();
    new Ticker({ tag: "AXIARE PATRIMONIO SOCIMI", ticker: "AXIA" }).save();
    new Ticker({ tag: "AZKOYEN", ticker: "AZK" }).save();
    new Ticker({ tag: "BANCO SABADELL", ticker: "SAB" }).save();
    new Ticker({ tag: "BANKIA", ticker: "BKIA" }).save();
    new Ticker({ tag: "BANKINTER", ticker: "BKT" }).save();
    new Ticker({ tag: "BARÓN DE LEY", ticker: "BDL" }).save();
    new Ticker({ tag: "BAVIERA", ticker: "CBAV" }).save();
    new Ticker({ tag: "BAYER", ticker: "BAY" }).save();
    new Ticker({ tag: "BBVA", ticker: "BBVA" }).save();
    new Ticker({ tag: "BIOSEARCH", ticker: "BIO" }).save();
    new Ticker({ tag: "BME", ticker: "BME" }).save();
    new Ticker({ tag: "BODEGAS RIOJANAS", ticker: "RIO" }).save();
    new Ticker({ tag: "BORGES AGRI BR", ticker: "BAIN" }).save();
    new Ticker({ tag: "C.A.F.", ticker: "CAF" }).save();
    new Ticker({ tag: "CAIXABANK", ticker: "CABK" }).save();
    new Ticker({ tag: "CAM", ticker: "CAM" }).save();
    new Ticker({ tag: "CATALANA OCCIDENTE", ticker: "GCO" }).save();
    new Ticker({ tag: "CELLNEX TELECOM", ticker: "CLNX" }).save();
    new Ticker({ tag: "CIE. AUTOMOTIVE", ticker: "CIE" }).save();
    new Ticker({ tag: "CLEOP", ticker: "CLEO" }).save();
    new Ticker({ tag: "COCA-COLA EUROP", ticker: "CCE" }).save();
    new Ticker({ tag: "CODERE", ticker: "CDR" }).save();
    new Ticker({ tag: "COEMAC", ticker: "CMC" }).save();
    new Ticker({ tag: "COLONIAL", ticker: "COL" }).save();
    new Ticker({ tag: "DEOLEO", ticker: "OLE" }).save();
    new Ticker({ tag: "DIA", ticker: "DIA" }).save();
    new Ticker({ tag: "DOGI", ticker: "DGI" }).save();
    new Ticker({ tag: "DURO FELGUERA", ticker: "MDF" }).save();
    new Ticker({ tag: "EBRO FOODS", ticker: "EBRO" }).save();
    new Ticker({ tag: "EDREAMS ODIGEO", ticker: "EDR" }).save();
    new Ticker({ tag: "ELECNOR", ticker: "ENO" }).save();
    new Ticker({ tag: "ENAGAS", ticker: "ENG" }).save();
    new Ticker({ tag: "ENCE", ticker: "ENC" }).save();
    new Ticker({ tag: "ENDESA", ticker: "ELE" }).save();
    new Ticker({ tag: "ERCROS", ticker: "ECR" }).save();
    new Ticker({ tag: "EUROPAC", ticker: "PAC" }).save();
    new Ticker({ tag: "EUSKALTEL", ticker: "EKT" }).save();
    new Ticker({ tag: "EZENTIS", ticker: "EZE" }).save();
    new Ticker({ tag: "FAES", ticker: "FAE" }).save();
    new Ticker({ tag: "FCC", ticker: "FCC" }).save();
    new Ticker({ tag: "FERROVIAL", ticker: "FER" }).save();
    new Ticker({ tag: "FLUIDRA", ticker: "FDR" }).save();
    new Ticker({ tag: "FUNESPAÑA", ticker: "FUN" }).save();
    new Ticker({ tag: "GAM", ticker: "GALQ" }).save();
    new Ticker({ tag: "GAS NATURAL", ticker: "GAS" }).save();
    new Ticker({ tag: "GESTAMP", ticker: "GEST" }).save();
    new Ticker({ tag: "GLOBAL DOMINION ACCESS", ticker: "DOM" }).save();
    new Ticker({ tag: "GRENERGY RENOVABLES", ticker: "GRE" }).save();
    new Ticker({ tag: "GRIFOLS", ticker: "GRF" }).save();
    new Ticker({ tag: "GRUPO EMP. SAN JOSE", ticker: "GSJ" }).save();
    new Ticker({ tag: "HISPANIA ACTIVOS INMOBILIARIOS", ticker: "HIS" }).save();
    new Ticker({ tag: "IAG", ticker: "IAG" }).save();
    new Ticker({ tag: "IBERDROLA", ticker: "IBE" }).save();
    new Ticker({ tag: "IBERPAPEL", ticker: "IBG" }).save();
    new Ticker({ tag: "INDITEX", ticker: "ITX" }).save();
    new Ticker({ tag: "INDRA", ticker: "IDR" }).save();
    new Ticker({ tag: "INMOBILIARIA DEL SUR", ticker: "ISUR" }).save();
    new Ticker({ tag: "INYPSA", ticker: "INY" }).save();
    new Ticker({ tag: "LABORATORIO REIG JOFRE", ticker: "RJF" }).save();
    new Ticker({ tag: "LAR ESPAÑA", ticker: "LRE" }).save();
    new Ticker({ tag: "LIBERBANK", ticker: "LBK" }).save();
    new Ticker({ tag: "LINGOTES", ticker: "LGT" }).save();
    new Ticker({ tag: "LOGISTA", ticker: "LOG" }).save();
    new Ticker({ tag: "MAPFRE", ticker: "MAP" }).save();
    new Ticker({ tag: "MASMOVIL", ticker: "MAS" }).save();
    new Ticker({ tag: "MEDIASET", ticker: "TL5" }).save();
    new Ticker({ tag: "MELIÁ HOTELS", ticker: "MEL" }).save();
    new Ticker({ tag: "MERLIN PROP.", ticker: "MRL" }).save();
    new Ticker({ tag: "METROVACESA", ticker: "MVC" }).save();
    new Ticker({ tag: "MIQUEL COSTAS", ticker: "MCM" }).save();
    new Ticker({ tag: "MONTEBALITO", ticker: "MTB" }).save();
    new Ticker({ tag: "NATRA", ticker: "NAT" }).save();
    new Ticker({ tag: "NATURHOUSE HEALTH", ticker: "NTH" }).save();
    new Ticker({ tag: "NEINOR HOMES", ticker: "HOME" }).save();
    new Ticker({ tag: "NH HOTEL GROUP", ticker: "NHH" }).save();
    new Ticker({ tag: "NICOLÁS CORREA", ticker: "NEA" }).save();
    new Ticker({ tag: "NYESA", ticker: "NYE" }).save();
    new Ticker({ tag: "OHL", ticker: "OHL" }).save();
    new Ticker({ tag: "ORYZON GENOMICS", ticker: "ORY" }).save();
    new Ticker({ tag: "PARQUES REUNIDOS", ticker: "PQR" }).save();
    new Ticker({ tag: "PESCANOVA", ticker: "PVA" }).save();
    new Ticker({ tag: "PHARMA MAR", ticker: "PHM" }).save();
    new Ticker({ tag: "PRIM", ticker: "PRM" }).save();
    new Ticker({ tag: "PRISA", ticker: "PRS" }).save();
    new Ticker({ tag: "PROSEGUR", ticker: "PSG" }).save();
    new Ticker({ tag: "PROSEGUR CASH", ticker: "CASH" }).save();
    new Ticker({ tag: "QUABIT", ticker: "QBT" }).save();
    new Ticker({ tag: "REALIA", ticker: "RLIA" }).save();
    new Ticker({ tag: "RED ELÉCTRICA", ticker: "REE" }).save();
    new Ticker({ tag: "RENO DE MEDICI", ticker: "RDM" }).save();
    new Ticker({ tag: "RENTA CORPORACION", ticker: "REN" }).save();
    new Ticker({ tag: "RENTA 4", ticker: "REP" }).save();
    new Ticker({ tag: "REPSOL", ticker: "" }).save();
    new Ticker({ tag: "ROVI", ticker: "ROVI" }).save();
    new Ticker({ tag: "SACYR", ticker: "SCYR" }).save();
    new Ticker({ tag: "SAETA YIELD", ticker: "SAY" }).save();
    new Ticker({ tag: "SANTANDER", ticker: "SAN" }).save();
    new Ticker({ tag: "SERVICE POINT", ticker: "SPS" }).save();
    new Ticker({ tag: "SIEMENS GAMESA", ticker: "SGRE" }).save();
    new Ticker({ tag: "SNIACE", ticker: "SNC" }).save();
    new Ticker({ tag: "SOLARIA", ticker: "SLR" }).save();
    new Ticker({ tag: "TALGO", ticker: "TLGO" }).save();
    new Ticker({ tag: "TECNICAS REUNIDAS", ticker: "TRE" }).save();
    new Ticker({ tag: "TELEFÓNICA", ticker: "TEF" }).save();
    new Ticker({ tag: "TELEPIZZA GROUP", ticker: "TPZ" }).save();
    new Ticker({ tag: "TUBACEX", ticker: "TUB" }).save();
    new Ticker({ tag: "TUBOS REUNIDOS", ticker: "TRG" }).save();
    new Ticker({ tag: "UNICAJA BANCO", ticker: "UNI" }).save();
    new Ticker({ tag: "URBAS", ticker: "UBS" }).save();
    new Ticker({ tag: "VERTICE", ticker: "VER" }).save();
    new Ticker({ tag: "VIDRALA", ticker: "VID" }).save();
    new Ticker({ tag: "VISCOFAN", ticker: "VIS" }).save();
    new Ticker({ tag: "VOCENTO", ticker: "VOC" }).save();
    new Ticker({ tag: "ZARDOYA OTIS", ticker: "ZOT" }).save(
        function(res){
            
            console.log("Carga finalizada.");
            //Al finalizar la última inserción lanzamos evento de fin de proceso.
            setTimeout(function(){
                em.emit('END-C2','Fin de proceso!');
            }
            , 3000); // Esperamos 3 segundos            
        }
    );
    
};
