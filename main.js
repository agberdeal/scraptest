//npm install --save express needle cheerio path handlebars mongodb mongoose

// Imports
var mongoose = require('mongoose');
const metodos = require('./extraction/e1');
const cargas = require('./data/carga1');

//Config
var url_mongo="mongodb://localhost:27017/"
var database="inversion"

// Iniciamos conexion con base de datos
mongoose.connect(url_mongo + database);

// Ejecutamos la extraccion de precios y rentabilidades del dia
var res1 = metodos.e1();

// Ejecutamos la carga de alias (tickers)
//var c1 = cargas.carga1();

console.log("fin");
                    
