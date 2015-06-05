// for load js files from the internet 

var JStore = require("../store/JStore.js");

var JRequire = require("../builder/JRequire.js");

var JList = JRequire.require("whereisJList").init();

var JNet = JRequire.require("whereisJNet");


var urlList = JList;

var Loader = {

	content : "";

	saveIfNeeded : function(save,urladdr){
		
		if(save){
			// save the js files just got , parse and get filename from urladdr 
			// if possible 
			JStore.store(this.content,urladdr);
		}
		return this.content;
	
	}

	retriveJsFromNet : function(){

		var urladdr = urlList.pop();
		
		// now get the js file needed 
	    content = JNet.get(urladdr);
		
		return this; // the js codes 
		
	};
	
}

function checkaddr(addr){
	
	return 'passed';

}


function getJs(urladdr,save){
	
	// retrive name from url tail to tell if this file has
	// been downloaded before 
	if(JStore.exist(urladdr)){
		return JStore.query(urladdr).get();
	}
	
	if(checkaddr(urladdr) === 'passed'){
		urlList.push(urladdr);
	}
	
	return retriveJsFromNet().saveIfNeeded(save,urladdr);

}


module.exports  ={
	
	getJs : getJs

}