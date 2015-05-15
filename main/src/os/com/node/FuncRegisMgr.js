
var FUNC1 = require("../../../../tools/other/generateQRCode/server.js");

function FuncRegisMgr(param ){
	
	
	
}

function getMainFunc(){

	// temporarily add here for QRCode 
	
	return FUNC1.htmlpush_server;

}

// this function is a little bit strange 
function exec(input){

	FUNC1.htmlpush_server(input);

}

// tmp added 
function init(tmp){
	
}


module.exports  = {
	
	FuncRegisMgr : FuncRegisMgr,
	
	getMainFunc : getMainFunc,
	
	exec : exec,
	
	init  : init

}