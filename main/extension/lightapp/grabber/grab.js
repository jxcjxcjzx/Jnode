  // summary the lib dependence in only one js file like basic.js does 
 var CONSTS = require('../../../consts.js');
 var find7 = require('../../../finder.js');
 
 var comm = require(find7.find(CONSTS.ADDRS.ASYNCHRONOUS_BASIC));
 
 var grabber = require(find7.find(CONSTS.ADDRS.GRABBER_FRAMEWORK));
 
 function imoocfunc1(){
 
 
 }	
 
 
 function imoocfunc2(){
 
 }

  
	
function execmain(){
	
	var urladdrlist = [];
	
	console.log("is execting grab main function ");
	comm.init();
	// when the urladdrlist param is passed to function2 , it has already been altered 
	comm.Promise.first(imoocfunc1,urladdrlist).then(imoocfunc2,urladdrlist).start();
	
}
 
 
 module.exports = {
	execmain : execmain
 }	
	