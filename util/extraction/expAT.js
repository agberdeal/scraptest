module.exports.expAT = function () {

    'use strict'

    // Imports
    let metodos = require('./expATvalor');

    // Definimos las correspondencias tiker->valor
    let valores = [
        { ticker: "ABG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/abengoa_NEABG.html" },
        { ticker: "ABG.P", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/abengoab_M.ABG.P.html" },
        { ticker: "ABE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/abertis_M.ABE.html" },
        { ticker: "ANA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/acciona_M.ANA.html" },
        { ticker: "ACX", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/acerinox_M.ACX.html" },
        { ticker: "ACS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/acs_M.ACS.html" },
        { ticker: "ADZ", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/adolfodominguez_M.ADZ.html" },
        { ticker: "ADV", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/adveo_M.ADV.html" },
        { ticker: "AENA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/aena_M.AENA.html" },
        { ticker: "AIR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/airbus_M.AIR.html" },
        { ticker: "ALNT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/alantra_M.ALNT.html" },
        { ticker: "ALB", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/alba_M.ALB.html" },
        { ticker: "ALM", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/almirall_M.ALM.html" },
        { ticker: "AMS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/amadeusitgroup_M.AMS.html" },
        { ticker: "AMP", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/amper_NEAMP.html" },
        { ticker: "APPS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/applus_M.APPS.html" },
        { ticker: "MTS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/arcelormittal_M.MTS.html" },
        { ticker: "A3M", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/atresmedia_M.A3M.html" },
        { ticker: "ADX", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/audaxrenovables_M.FRS.html" },
        { ticker: "AXIA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/axiarepatrimoniosocimi_M.AXIA.html" },
        { ticker: "AZK", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/a/azkoyen_M.AZK.html" },
        { ticker: "SAB", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bancosabadell_M.SAB.html" },
        { ticker: "BKIA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bankia_M.BKIA.html" },
        { ticker: "BKT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bankinter_M.BKT.html" },
        { ticker: "BDL", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/barondeley_M.BDL.html" },
        { ticker: "CBAV", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/baviera_M.CBAV.html" },
        { ticker: "BAY", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bayer_M.BAY.html" },
        { ticker: "BBVA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bbva_M.BBVA.html" },
        { ticker: "BIO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/biosearch_NEBIO.html" },
        { ticker: "BME", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bme_M.BME.html" },
        { ticker: "RIO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/b/bodegasriojanas_M.RIO.html" },
        { ticker: "CABK", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/caixabank_M.CABK.html" },
        { ticker: "GCO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/catalanaoccidente_M.GCO.html" },
        { ticker: "CLNX", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/cellnextelecom_M.CLNX.html" },
        { ticker: "CIE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/cieautomotive_M.CIE.html" },
        { ticker: "CCE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/cocacolaeurop_M.CCE.html" },
        { ticker: "CMC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/coemac_M.CMC.html" },
        { ticker: "COL", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/c/colonial_M.COL.html" },
        { ticker: "OLE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/d/deoleo_M.OLE.html" },
        { ticker: "DIA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/d/dia_M.DIA.html" },
        { ticker: "DGI", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/d/dogi_M.DGI.html" },
        { ticker: "MDF", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/d/durofelguera_M.MDF.html" },
        { ticker: "EBRO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/ebrofoods_M.EVA.html" },
        { ticker: "EDR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/edreamsodigeo_M.EDR.html" },
        { ticker: "ENO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/elecnor_M.ENO.html" },
        { ticker: "ENG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/enagas_M.ENG.html" },
        { ticker: "ENC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/ence_M.ENC.html" },
        { ticker: "ELE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/endesa_M.ELE.html" },
        { ticker: "ECR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/ercros_M.ECR.html" },
        { ticker: "PAC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/europac_M.PAC.html" },
        { ticker: "EKT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/euskaltel_M.EKT.html" },
        { ticker: "EZE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/e/ezentis_M.EZE.html" },
        { ticker: "FAE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/f/faes_M.FAE.html" },
        { ticker: "FCC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/f/ferrovial_M.FER.html" },
        { ticker: "FER", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/f/ferrovial_M.FER.html" },
        { ticker: "FDR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/f/fluidra_M.FDR.html" },
        { ticker: "NTGY", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/g/gasnatural_M.GAS.html" },
        { ticker: "DOM", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/g/globaldominionaccess_M.DOM.html" },
        { ticker: "GRF", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/g/grifols_M.GRF.html" },
        { ticker: "GSJ", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/g/grupoempsanjose_M.GSJ.html" },
        { ticker: "HIS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/h/hispaniaactivosinmobiliarios_M.HIS.html" },
        { ticker: "IAG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/iag_M.IAG.html" },
        { ticker: "IBE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/iberdrola_M.IBE.html" },
        { ticker: "IBG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/iberpapel_M.IBG.html" },
        { ticker: "ITX", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/inditex_M.ITX.html" },
        { ticker: "IDR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/indra_NEIDR.html" },
        { ticker: "ISUR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/inmobiliariadelsur_M.ISUR.html" },
        { ticker: "INY", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/i/inypsa_M.INY.html" },
        { ticker: "RJF", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/l/laboratorioreigjofre_M.RJF.html" },
        { ticker: "LRE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/l/larespana_M.LRE.html" },
        { ticker: "LBK", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/l/liberbank_M.LBK.html" },
        { ticker: "LGT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/l/lingotes_M.LGT.html" },
        { ticker: "LOG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/l/logista_M.LOG.html" },
        { ticker: "MAP", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/mapfre_M.MAP.html" },
        { ticker: "TL5", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/mediaset_M.TL5.html" },
        { ticker: "MEL", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/meliahotels_M.MEL.html" },
        { ticker: "MRL", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/merlinprop_M.MRL.html" },
        { ticker: "MCM", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/miquelcostas_M.MCM.html" },
        { ticker: "MTB", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/m/montebalito_M.MTB.html" },
        { ticker: "NAT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/n/natra_M.NAT.html" },
        { ticker: "NTH", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/n/naturhousehealth_M.NTH.html" },
        { ticker: "NHH", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/n/nhhotelgroup_M.NHH.html" },
        { ticker: "NEA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/n/nicolascorrea_M.NEA.html" },
        { ticker: "OHL", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/o/ohl_M.OHL.html" },
        { ticker: "ORY", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/o/oryzongenomics_M.ORY.html" },
        { ticker: "PQR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/parquesreunidos_M.PQR.html" },
        { ticker: "PVA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/pescanova_M.PVA.html" },
        { ticker: "PHM", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/pharmamar_M.PHM.html" },
        { ticker: "PRM", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/prim_M.PRM.html" },
        { ticker: "PRS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/prisa_M.PRS.html" },
        { ticker: "PSG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/p/prosegur_M.PSG.html" },
        { ticker: "QBT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/q/quabit_M.QBT.html" },
        { ticker: "RLIA", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/realia_M.RLIA.html" },
        { ticker: "REE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/redelectrica_M.REE.html" },
        { ticker: "REN", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/rentacorporacion_M.REN.html" },
        { ticker: "R4", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/renta4_M.R4.html" },
        { ticker: "REP", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/repsol_M.REP.html" },
        { ticker: "ROVI", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/r/rovi_M.ROVI.html" },
        { ticker: "SCYR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/sacyr_M.SCYR.html" },
        { ticker: "SAY", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/saetayield_M.SAY.html" },
        { ticker: "SAN", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/santander_M.SAN.html" },
        { ticker: "SGRE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/siemensgamesa_M.SGRE.html" },
        { ticker: "SNC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/sniace_M.SNC.html" },
        { ticker: "SLR", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/s/solaria_M.SLR.html" },
        { ticker: "TLGO", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/talgo_M.TLGO.html" },
        { ticker: "TRE", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/tecnicasreunidas_M.TRE.html" },
        { ticker: "TEF", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/telefonica_M.TEF.html" },
        { ticker: "TPZ", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/telepizzagroup_M.TPZ.html" },
        { ticker: "TUB", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/tubacex_M.TUB.html" },
        { ticker: "TRG", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/t/tubosreunidos_M.TRG.html" },
        { ticker: "UBS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/u/urbas_M.UBS.html" },
        { ticker: "VID", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/v/vidrala_M.VID.html" },
        { ticker: "VIS", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/v/viscofan_M.VIS.html" },
        { ticker: "VOC", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/v/vocento_M.VOC.html" },
        { ticker: "ZOT", url: "http://www.expansion.com/mercados/bolsa/recomendaciones/analisis-tecnico/z/zardoyaotis_M.ZOT.html" }
    ]

    // Carga analisis tecnico por cada valor
    valores.forEach(function (v, indice, array) {
        metodos.expATvalor(v.ticker, v.url);
    });
}	