 
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
	
	thumbnailGenerator : "./python/thumbnailGenerator.py",
	
	html2pngWrapper : "./python/html2pngWrapper.py"
	
 }

 var OTHEREXE_ADDR = {
 
	html2png :  "D:\\User\\Documents\\GitHub\\Jnode\\main\\extension\\lightapp\\RealHtml\\tool_html2pic\\html2png.exe"
 
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
	comm.init();
	comm.Promise.first(func2,["http://127.0.0.1:1338/html1"]).then(func3,["./html1.png,./html2.png,10,20,100,100"]).start();
	
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


var func2 = function(htmlAddr){

	/*
		var arg1 = htmlAddr;
		exec(OTHEREXE_ADDR.html2png+' '+arg1,function(error,stdout,stderr){
			// can do some handling here 
			console.log(error);
		});
	*/
	// for original exe , using wrapper strategy
	var arg1 = htmlAddr;
	exec('G:\\free\\CY\\For_python\\python.exe '+PYTHONEXE_ADDR.html2pngWrapper+' '+arg1,function(error,stdout,stderr){
		// can do some handling here 
		console.log(error);
	});
	
}

var func3 = function(htmlPicdAddr){

	// temporarily added   
	// var arg1 = "./python/tmp/hello.jpg,./html2.png,100,200,300,500";
	var arg1 = htmlPicdAddr;
	
	exec('G:\\free\\CY\\For_python\\python.exe '+PYTHONEXE_ADDR.python_image_crop_tool+' '+arg1,function(error,stdout,stderr){
		// can do some handling here 
		console.log(error);
	});

}




module.exports = {
	execmain : execmain
}	
	
	