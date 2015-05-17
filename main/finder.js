
var consts = require('./consts.js');

// attention!!! here 
//  you can get the current dir by using 
// ---    processor.pwd()
// and the nodejs install dir by using 
// ---    processor.execPath


function find(ADDR){
	
	// some little tmp trick 
	if(ADDR == consts.ADDRS.FUNCMANAGER){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.FUNCMANAGER;
		
	}
	
	if(ADDR == consts.ADDRS.HTMLFORREAL){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.HTMLFORREAL;
		
	}
	
	if(ADDR == consts.ADDRS.ASYNCHRONOUS){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.ASYNCHRONOUS;
		
	}
	
	if(ADDR == consts.ADDRS.ASYNCHRONOUS_BASIC){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.ASYNCHRONOUS_BASIC;
		
	}
	
	if(ADDR == consts.ADDRS.DESKTOP){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.DESKTOP;
		
	}
	
	if(ADDR == consts.ADDRS.TOUTIAO){
		// return the functionmanager source addr 
		// quite strange here 
		return consts.ADDRS.TOUTIAO;
		
	}
	
	

}

module.exports = {

		find : find
	
}