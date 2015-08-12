// JSON解析中间件

// wrapper of ref/json lib in other addr 

var json_ref = require("../../ref/JSON-js-master/json.js");


var WRAPPER = {
	
	stringify : function(value, replacer, space){	
		return JSON.stringify(value, replacer, space); 
	},
	
	parse : function(text, reviver){
		return JSON.parse(text, reviver); 
	},

};


var DEFAULTS = {
	// some functions and consts must 
	// be provided by each source file 
	


};

function inner_test(){
	
	console.log(" entering  inner_test in json  ");
	
	// WRAPPER.stringify(null,null,null);
	
	/*
	var text = "date-20150810";
	var myData = text.parseJSON(function (key, value) {
                return key.indexOf('date') >= 0 ? new Date(value) : value;
            });
	*/
	

	var text = WRAPPER.stringify(['e', {pluribus: 'unum'}], null, '\t');
	console.log(text);
}




module.exports = {

	inner_test : inner_test

}