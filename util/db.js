module.exports.conectar = function(){

	// Imports
	let mongoose = require('mongoose');

	// Config
	const url_mongo="mongodb://localhost/";
	const database="inv";

	// Iniciamos conexion con base de datos
    mongoose.connect(url_mongo + database);

    // retornamos la conexión.
    return mongoose;
    
}

module.exports.desconectar = function(m){

    // Cerramos la conexion
	m.connection.close();
}