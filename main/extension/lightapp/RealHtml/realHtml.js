 
 // summary the lib dependence in only one js file like basic.js does 
 var CONSTS = require('../../../consts.js');
 var find7 = require('../../../finder.js');
 
 var comm = require(find7.find(CONSTS.ADDRS.ASYNCHRONOUS_BASIC));
 
 
 // for outer exe exectuation 
 var spawn = require('child_process').spawn;
 var exec = require('child_process').exec;
 
 
 
 var PYTHONEXE_ADDR = {
 
	auto_crop : "./python/auto_crop.py",
	
	urlDowner : "D:\\User\\Documents\\GitHub\\Jnode\\main\\extension\\lightapp\\RealHtml\\python\\urlDowner.py",
	
	pyText2PicTool : "./python/pyText2PicTool.py",
	
	python_image_crop_tool : "./python/python_image_crop_tool.py",
	
	thumbnailGenerator : "./python/thumbnailGenerator.py"
	
 }

 
 // ps : using offline http simulated httpserver to have the pic download test 

var innerFuncWrap = {
	// a list of inner function which can not be exposed to 
	// outer functions  or objects 
	downPics : function downPics(){
		setTimeout(console.log("downPics"),2000);
		
	},
	
	getPicParams : function getPicParams(){
		console.log("getPicParams");
	},
	
	slicePics : function slicePics(){
		console.log("slicePics");
	},
	
	preparePics : function preparePics(){
		console.log("preparePics");
	},
	
	writeHtmls : function writeHtmls(){
		console.log("writeHtmls");
	},
	
	prepareHtmlAddrAndFinish : function prepareHtmlAddrAndFinish(){
		console.log("prepareHtmlAddrAndFinish");
	}
	
}	
	

	
function execmain(){
	
	console.log("is execting func1");
	comm.Promise.first(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]).then(func1,["http://127.0.0.1:1338/?pics2"]);
	// comm.Promise.first(func1).then(func1).then(func1);
	
}

var  func1 = function(urladdr) {

	// the local simulated pic server 
	var arg1 = urladdr;
	exec('G:\\free\\CY\\For_python\\python.exe '+PYTHONEXE_ADDR.urlDowner+' '+arg1,function(error,stdout,stderr){
		// can do some handling here 
		console.log(error);
	});
	
	// var result = spawn("python "+PYTHONEXE_ADDR.urlDowner);

}





module.exports = {
	execmain : execmain
}	
	
	