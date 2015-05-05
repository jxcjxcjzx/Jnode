// a url get or post test js lib
// first for pediy discussion 
// this is a simulation of application in android mobile side 


var constants = {
	
	

}

var TokenStruct = {
	key : value;
	...
}

// json is a special TokenStruct
var Json inherits TokenStruct;

function logIn(urlAddr,dataSent){

}

function getToken(TokenUrlAddr)
{
	
	
}

function doGetRequest(requestUrlAddr){

}



function doPostRequest(requestUrlAddr,postParams){
	var temp = document.createElement("form");
	temp.action = requestUrlAddr;
	temp.method = "post";
	temp.style.display = "none";
	for(var x in postParams){
		var opt = document.createElement("textarea");
		opt.name = x;
		opt.value = postParams[x];
		temp.appendChild(opt);
	}
	document.body.appendChild(temp);
	temp.submit();
	return temp;
}


function createXMLHttpRequest(){
	
	
}

function str2Ent(){
	var output = "";
	

}

