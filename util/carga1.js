module.exports.carga1 = function(em) {

    'use strict'
    
    // Imports
    const Diccionario = require('../model/diccionario');
    const Mercado = require('../model/mercado');
 
    // Ejecutamos carga de Mercados
    new Mercado({ mercadoID: "BME", nombre: "Bolsa de Madrid", pais: "ES"} ).save();
    
    // Ejecutamos carga de Diccionarios

    // Indicadores
    new Diccionario({ tipo: "indicador" , tag: "Corto Plazo", valor: "Corto Plazo" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Medio Plazo", valor: "Medio Plazo" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Largo Plazo", valor: "Largo Plazo" }).save();
    new Diccionario({ tipo: "indicador" , tag: "RSI 7", valor: "RSI 7" }).save();
    new Diccionario({ tipo: "indicador" , tag: "RSI 14", valor: "RSI 14" }).save();
    new Diccionario({ tipo: "indicador" , tag: "RSI 50", valor: "RSI 50" }).save();
    new Diccionario({ tipo: "indicador" , tag: "RSI 200", valor: "RSI 200" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Estoc. Rápidos", valor: "Estoc. Rápidos" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Estoc. Lentos", valor: "Estoc. Lentos" }).save();
    new Diccionario({ tipo: "indicador" , tag: "MM 7", valor: "MM 7" }).save();
    new Diccionario({ tipo: "indicador" , tag: "MM 21", valor: "MM 21" }).save();
    new Diccionario({ tipo: "indicador" , tag: "MM 50", valor: "MM 50" }).save();
    new Diccionario({ tipo: "indicador" , tag: "MM 200", valor: "MM 200" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM 7", valor: "EMM 7" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM 21", valor: "EMM 21" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM 50", valor: "EMM 50" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM 200", valor: "EMM 200" }).save();
    new Diccionario({ tipo: "indicador" , tag: "MACD linea/señal", valor: "MACD" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Bollinger 95", valor: "Bollinger 95" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Bollinger 99", valor: "Bollinger 99" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM Doble 7", valor: "EMM Doble 7" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM Doble 21", valor: "EMM Doble 21" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM Doble 50", valor: "EMM Doble 50" }).save();
    new Diccionario({ tipo: "indicador" , tag: "EMM Doble 200", valor: "EMM Doble 200" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Divergencias", valor: "Divergencias" }).save();
    new Diccionario({ tipo: "indicador" , tag: "On Balance Vol.", valor: "On Balance Vol." }).save();
    new Diccionario({ tipo: "indicador" , tag: "Momento 7", valor: "Momento 7" }).save();
    new Diccionario({ tipo: "indicador" , tag: "Momento 14", valor: "Momento 14" }).save();
    new Diccionario({ tipo: "indicador" , tag: "% K Williams", valor: "% K Williams" }).save();    

    // Tickers
    new Diccionario({ tipo: "ticker" , tag: "ABENGOA", valor: "ABG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ABENGOA", valor: "ABG.P" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ABERTIS", valor: "ABE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ACCIONA", valor: "ANA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ACERINOX", valor: "ACX" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ACS", valor: "ACS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ADOLFO DOMÍNGUEZ", valor: "ADZ" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ADVEO", valor: "ADV" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AEDAS HOMES", valor: "AEDAS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AENA", valor: "AENA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AIRBUS", valor: "AIR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ALANTRA", valor: "ALNT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ALBA", valor: "ALB" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ALMIRALL", valor: "ALM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AMADEUS IT GROUP", valor: "AMS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AMPER", valor: "AMP" }).save();
    new Diccionario({ tipo: "ticker" , tag: "APERAM", valor: "APAM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "APPLUS", valor: "APPS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ARCELORMITTAL", valor: "MTS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ATRESMEDIA", valor: "A3M" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AUDAX RENOVABLES", valor: "ADX" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AXIARE PATRIMONIO SOCIMI", valor: "AXIA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "AZKOYEN", valor: "AZK" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BANCO SABADELL", valor: "SAB" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BANKIA", valor: "BKIA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BANKINTER", valor: "BKT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BARÓN DE LEY", valor: "BDL" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BAVIERA", valor: "CBAV" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BAYER", valor: "BAY" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BBVA", valor: "BBVA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BIOSEARCH", valor: "BIO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BME", valor: "BME" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BODEGAS RIOJANAS", valor: "RIO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "BORGES AGRI BR", valor: "BAIN" }).save();
    new Diccionario({ tipo: "ticker" , tag: "C.A.F.", valor: "CAF" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CAIXABANK", valor: "CABK" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CAM", valor: "CAM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CATALANA OCCIDENTE", valor: "GCO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CELLNEX TELECOM", valor: "CLNX" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CIE. AUTOMOTIVE", valor: "CIE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CLEOP", valor: "CLEO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "COCA-COLA EUROP", valor: "CCE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "CODERE", valor: "CDR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "COEMAC", valor: "CMC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "COLONIAL", valor: "COL" }).save();
    new Diccionario({ tipo: "ticker" , tag: "DEOLEO", valor: "OLE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "DIA", valor: "DIA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "DOGI", valor: "DGI" }).save();
    new Diccionario({ tipo: "ticker" , tag: "DURO FELGUERA", valor: "MDF" }).save();
    new Diccionario({ tipo: "ticker" , tag: "EBRO FOODS", valor: "EBRO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "EDREAMS ODIGEO", valor: "EDR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ELECNOR", valor: "ENO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ENAGAS", valor: "ENG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ENCE", valor: "ENC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ENDESA", valor: "ELE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ERCROS", valor: "ECR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "EUROPAC", valor: "PAC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "EUSKALTEL", valor: "EKT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "EZENTIS", valor: "EZE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "FAES", valor: "FAE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "FCC", valor: "FCC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "FERROVIAL", valor: "FER" }).save();
    new Diccionario({ tipo: "ticker" , tag: "FLUIDRA", valor: "FDR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "FUNESPAÑA", valor: "FUN" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GAM", valor: "GALQ" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GAS NATURAL", valor: "GAS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GESTAMP", valor: "GEST" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GLOBAL DOMINION ACCESS", valor: "DOM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GRENERGY RENOVABLES", valor: "GRE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GRIFOLS", valor: "GRF" }).save();
    new Diccionario({ tipo: "ticker" , tag: "GRUPO EMP. SAN JOSE", valor: "GSJ" }).save();
    new Diccionario({ tipo: "ticker" , tag: "HISPANIA ACTIVOS INMOBILIARIOS", valor: "HIS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "IAG", valor: "IAG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "IBERDROLA", valor: "IBE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "IBERPAPEL", valor: "IBG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "INDITEX", valor: "ITX" }).save();
    new Diccionario({ tipo: "ticker" , tag: "INDRA", valor: "IDR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "INMOBILIARIA DEL SUR", valor: "ISUR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "INYPSA", valor: "INY" }).save();
    new Diccionario({ tipo: "ticker" , tag: "LABORATORIO REIG JOFRE", valor: "RJF" }).save();
    new Diccionario({ tipo: "ticker" , tag: "LAR ESPAÑA", valor: "LRE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "LIBERBANK", valor: "LBK" }).save();
    new Diccionario({ tipo: "ticker" , tag: "LINGOTES", valor: "LGT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "LOGISTA", valor: "LOG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MAPFRE", valor: "MAP" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MASMOVIL", valor: "MAS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MEDIASET", valor: "TL5" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MELIÁ HOTELS", valor: "MEL" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MERLIN PROP.", valor: "MRL" }).save();
    new Diccionario({ tipo: "ticker" , tag: "METROVACESA", valor: "MVC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MIQUEL COSTAS", valor: "MCM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "MONTEBALITO", valor: "MTB" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NATRA", valor: "NAT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NATURHOUSE HEALTH", valor: "NTH" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NEINOR HOMES", valor: "HOME" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NH HOTEL GROUP", valor: "NHH" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NICOLÁS CORREA", valor: "NEA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "NYESA", valor: "NYE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "OHL", valor: "OHL" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ORYZON GENOMICS", valor: "ORY" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PARQUES REUNIDOS", valor: "PQR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PESCANOVA", valor: "PVA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PHARMA MAR", valor: "PHM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PRIM", valor: "PRM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PRISA", valor: "PRS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PROSEGUR", valor: "PSG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "PROSEGUR CASH", valor: "CASH" }).save();
    new Diccionario({ tipo: "ticker" , tag: "QUABIT", valor: "QBT" }).save();
    new Diccionario({ tipo: "ticker" , tag: "REALIA", valor: "RLIA" }).save();
    new Diccionario({ tipo: "ticker" , tag: "RED ELÉCTRICA", valor: "REE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "RENO DE MEDICI", valor: "RDM" }).save();
    new Diccionario({ tipo: "ticker" , tag: "RENTA CORPORACION", valor: "REN" }).save();
    new Diccionario({ tipo: "ticker" , tag: "RENTA 4", valor: "REP" }).save();
    new Diccionario({ tipo: "ticker" , tag: "REPSOL", valor: "" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ROVI", valor: "ROVI" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SACYR", valor: "SCYR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SAETA YIELD", valor: "SAY" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SANTANDER", valor: "SAN" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SERVICE POINT", valor: "SPS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SIEMENS GAMESA", valor: "SGRE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SNIACE", valor: "SNC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "SOLARIA", valor: "SLR" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TALGO", valor: "TLGO" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TECNICAS REUNIDAS", valor: "TRE" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TELEFÓNICA", valor: "TEF" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TELEPIZZA GROUP", valor: "TPZ" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TUBACEX", valor: "TUB" }).save();
    new Diccionario({ tipo: "ticker" , tag: "TUBOS REUNIDOS", valor: "TRG" }).save();
    new Diccionario({ tipo: "ticker" , tag: "UNICAJA BANCO", valor: "UNI" }).save();
    new Diccionario({ tipo: "ticker" , tag: "URBAS", valor: "UBS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "VERTICE", valor: "VER" }).save();
    new Diccionario({ tipo: "ticker" , tag: "VIDRALA", valor: "VID" }).save();
    new Diccionario({ tipo: "ticker" , tag: "VISCOFAN", valor: "VIS" }).save();
    new Diccionario({ tipo: "ticker" , tag: "VOCENTO", valor: "VOC" }).save();
    new Diccionario({ tipo: "ticker" , tag: "ZARDOYA OTIS", valor: "ZOT" }).save(
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
