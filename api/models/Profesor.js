/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
connection: 'someMysqlServer',
  tableName: 'profesor',

  attributes: {

  	cedula: {
  		type: 'float',
  		required: true,
  		defaultsTo: '8315735'
  	
  	},

  	nombre: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Juan'
  		
  	},

  	apellido: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Trabuco'
  		
  		
  	},

  	email: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'elfffi@hotmail.com'
  		
  		
  	},

  	  telefono: {
  		type: 'float',
  		required: true,
  		defaultsTo: '0212212321'
  		
  		
  	},

  	  especialidad: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'matematica'
  		
  	}



  }
};
