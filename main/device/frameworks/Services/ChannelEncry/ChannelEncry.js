// the channel encry tool
// written by jxc 2015/04/06  for pcduino talking channel

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// the developers are free to redefine it in detail, 
// however, the form will not change
var strategy = new function(){
	get: new functionGet(){
	 // this function is for get string transferred from far away
	
	}
	
	set: new functionSet(){
	 //  this function is for set string to transmitting to far away
	 
	}
	
	random : new functionRandom(){
	 // for random seed generating
	 
	}
	
}


function dataParse()
{
	
}

var service = new Service(){
	
	autherize: new functionAutherize(){
		
		return false;
	}
	
	login: new functionLogin(){
		
	}

	logout: new functionLogout(){
		
	}
	
	
	
}

var serverState = new Structure(){
	// all the user and server information is store in server side, not transmitted 
	var serverState = { time: ; user: ; count: ; pass: ; }
	
	get: new functionGet(){
		
	}
	
	set: new functionSet(){
		
	}
	
}


