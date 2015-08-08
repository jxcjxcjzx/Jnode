// JSON解析中间件

// wrapper of ref/json lib in other addr 

var json_ref = require("../../ref/JSON-js-master/json.js");


var WRAPPER = {



};


var DEFAULTS = {
	// some functions and consts must 
	// be provided by each source file 
	


};

function inner_test(){
	
	console.log(" entering  inner_test in json  ");
	console.log(module.parent.filename);
	
}




module.exports = {

	inner_test : inner_test

}