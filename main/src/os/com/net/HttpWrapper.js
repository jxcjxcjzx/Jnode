
 var Conn = require('./Connection.js');
 
 // all functions are wrappers, make logs here 
 // and translate them all later on 
 
 
 function makeGetRequest(url){
 
	return Conn.get(url);
 
 }
 
 
 
 
 module.exports = {
	
	makeGetRequest : makeGetRequest
	
 }