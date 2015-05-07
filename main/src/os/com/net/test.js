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
	for (int i = 0; i < input.length(); i++) {
    var ucode = input.codePointAt(i);
    var tmp = "";
    
    if (ucode > 255) {
      while (ucode >= 1) {
        tmp = "0123456789".charAt(ucode%10) + tmp;
        ucode /= 10;
      }
      
      if (tmp == "") {
        tmp = "0";
      }
      
      tmp = "#" + tmp;
      tmp = "&" + tmp;
      tmp = tmp + ";";
      output += tmp;
    }else {
      output += input.charAt(i);
    }
  }
  return output;

}


