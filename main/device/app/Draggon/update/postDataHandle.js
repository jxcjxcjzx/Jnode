
fs = require('fs');


var writeStream = fs.createWriteStream("./tmp.js")

function getWriteStream(){
	return writeStream;
}

 function _obtain(postData){
	
 }
 
 function _popDetails(){
 // defaults return 
	return "";
 }
 
 
 
 
 module.exports = {
	obtain : _obtain,
	popDetails : _popDetails,
	getWriteStream : getWriteStream
 }