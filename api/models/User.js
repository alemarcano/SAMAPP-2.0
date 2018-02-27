/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
connection: 'someMysqlServer',
  tableName: 'user',

  attributes: {

  	name: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'John'
  	},

  	lastname: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Lennon'
  		
  	},

  	username: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Lennon564564'
  		
  	},

  	  email: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'holahola'
  		
  	}



  }
};

