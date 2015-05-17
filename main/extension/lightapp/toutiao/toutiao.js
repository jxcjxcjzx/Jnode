 
 // power search engine 
 
 // summary the lib dependence in only one js file like basic.js does 
 var CONSTS = require('../../../consts.js');
 var find7 = require('../../../finder.js');
 
 var comm = require(find7.find(CONSTS.ADDRS.ASYNCHRONOUS_BASIC));
 
 
 // for outer exe exectuation 
 var spawn = require('child_process').spawn;
 var exec = require('child_process').exec;
 
 
 
 var PYTHONEXE_ADDR = {

	python_image_crop_tool : "./python/python_image_crop_tool.py",
	
	html2pngWrapper : "./python/html2pngWrapper.py"
	
 }

 var OTHEREXE_ADDR = {
 
	html2png :  "D:\\User\\Documents\\GitHub\\Jnode\\main\\extension\\lightapp\\toutiao\\tool_html2pic\\html2png.exe"
 
 }
 
	
function execmain(){
	
	// there is always a keyword for search 
	var keyword = "arduino";
	
	console.log("is execting func1");
	comm.init();
	// comm.Promise.first(func2,["http://www.haosou.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=arduino"]).then(func3,["./html1.png,./html2.png,10,20,100,100"]).start();
	comm.Promise.first(func2,["http://m.baidu.com/news"]).then(func2,["http://3g.163.com/x/"]).then(func2,["http://www.tianya.cn/m/"]).then(func2,["http://m.mop.com/"]).start();
	
}


var func2 = function(htmlAddr){

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
	
	