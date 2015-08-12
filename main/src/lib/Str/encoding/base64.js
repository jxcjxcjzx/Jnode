// the self-implement base-64 js lib 
// reference from web 
var utf = require("./utf.js");

var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var base64DecodeChars = new Array(
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
-1,-1,-1,-1,
-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,
-1,-1,-1,63,
52,53,54,55,56,57,58,59,60,61,
-1,-1,-1,-1,-1,-1,
-1,0,1,2,3,4,5,6,7,8,9,10,11,12,
13,14,
15,16,17,18,19,20,21,22,23,24,
25,-1,-1,-1,-1,-1,
-1,26,27,28,29,30,31,32,33,34,
35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50,
51,-1,-1,-1,-1,-1);



// transformed to utf.js 
 function utf8toutf16(str){
	return utf.utf8to16(str);
 }
 
// transformed to utf.js  
 function utf16toutf8(str){
	return utf.utf16to8(str);
 }
 
 
 function encode(data){
	var out,i,len;
	var c1,c2,c3;
	
	len = data.length;
	i=0;
	out="";
	while(i<len){
		c1 = data.charCodeAt(i++)&0xff;
		if(i == len){
			out+=base64EncodeChars.charAt(c1>>2);
			out+=base64EncodeChars.charAt((c1&0x3)<<4);
			out+="==";
			break;
		}
		c2 = data.charCodeAt(i++);
		if(i == len){
			out+=base64EncodeChars.charAt(c1>>2);
			out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
			out+=base64EncodeChars.charAt((c2&0xF)<<2);
			out+="=";
			break;
		}
		c3 = data.charCodeAt(i++);
		out+=base64EncodeChars.charAt(c1>>2);
		out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
		out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));
		out+=base64EncodeChars.charAt(c3&0x3F);
	}
	return out;
	
 }
 
 // temporarily the decode function 
 // will not be provided , INNER means the function will not be provided 
 
 function decode_INNER(b64){
	var c1,c2,c3,c4;
	var i,len,out;
	
	len = b64.length;
	i=0;
	out="";
	while(i<len){
		//c1
		do{
			c1 = base64DecodeChars[b64.charCodeAt(i++)&0xff];
		}while(i<len&&c1 == -1);
		if(c1 == -1)
		break;
		
		//c2
		do{
			c2 = base64DecodeChars[b64.charCodeAt(i++)&0xff];
		}while(i<len&&c2 == -1);
		if(c2 == -1)
		break;
		
		out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));
		
		//c3
		do{
			c3 = b64.charCodeAt(i++)&0xff;
			if(c3 == 61)
			return out;
			c3 = base64DecodeChars[c3];
		}while(i<len&&c3 == -1);
		if(c3 == -1)
		break;
		
		out+=String.fromCharCode(((c2&0xF)<<4)|((c3&0x3C)>>2));
		
		//c4
		do{
			c4 = b64.charCodeAt(i++)&0xff;
			if(c4 == 61)
			return out;
			c4 = base64DecodeChars[c4];
		}while(i<len&&c4 == -1);
		if(c4 == -1)
		break;
		
		out+=String.fromCharCode(((c3&0x03)<<6)|c4);
	}
	return out;
 }

 
 function inner_test(){
 
	var str = "simpletest";
	var sEncoded = encode(utf16toutf8(str));
	// var sDecoded = utf8toutf16(decode_INNER(sEncoded));
	
	// test if str === sDecoded
	console.log(" before encode : "+str);
	console.log(" after encode  : "+sEncoded)
	// console.log(" after decode : "+sDecoded);
 }
 
 
 module.exports = {
 
	// delete this export later 
	inner_test : inner_test
 
 }
 