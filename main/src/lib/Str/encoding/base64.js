// the self-implement base-64 js lib 
// reference from web 
var utf = require("./utf.js");


var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var bse64DecodeChars = new Array(
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
	utf.utf8toutf16(str);
 }
 
// transformed to utf.js  
 function utf16toutf8(str){
	utf.utf16toutf8(str);
 }
 
 
 function encode(data){
	var out,i,len;
	var c1,c2,c3;
	
	len = str.length;
	i=0;
	out="";
	while(i<len){
		c1 = str
	}
	
 }
 
 function decode(b64){
 
 }
 
 