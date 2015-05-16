var repl = require("repl");

// var main = require("./main.js");

// tmp added 
var simpleHandler = require("./tmp/simpleHandler.js")

repl.start({
// start with the command input and recall
	prompt: ">",
	eval:function(cmd,context,filename,callback){
		if(cmd!="(\n)"){
			cmd = cmd.slice(1,-2);  // rm params and ..
			var ret = simpleHandler.interprete(cmd);  // if this functions works 
			callback(null,ret);
		}else{
			callback(null);
		}
	}		
});

