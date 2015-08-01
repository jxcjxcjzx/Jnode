
// remove temporarily 
// var utils = require("./tools/utils.js");

// export the main functionality
module.exports = {

	init : function(){
	
	},
	
	onCreate : function(){
		conf.run();
	}
	
	,

	consts : require("./consts.js"),
	
	conf : require("./conf.js")
	
	// some other tools you will need to add 
	
	
}