
require("./db.js-master/db.js");

var db = DB(); 

// a pair is a key-value thing 
var pair= {
	_key : 0,
	_value : "",
	map : function(key,value){
		_key = key;
		_value = value;
		return {_key,_value};
	}
	
}
module.exports = {

	insert :  function(pair){
		db.insert(pair.map(pair.key,pair.value));
		
	}
	
	find : function(){
		
	}
	
	copy : function(){
	
	}
	
	del : function(){
	
	}
	
	// verse to store process
	sync : function(dbaddr){
	
	}
	
	// the store process 
	writeBack : function(dbaddr){
	
	}
	
	
}