
 var time = require('./pass/time.js');
 var number = 0;

 var CONNECTIONADDR = "../../main/src/os/com/net/HttpWrapper.js";
 
 var conn = require(CONNECTIONADDR);
 
 var url = "http://127.0.0.1:1350/?123dd";
 
 var test_main = function(){
	
	test_loop();
	
	
 }
 
 
 // adjust the for loop here 
 function loop(inital,endcondition,ways,code ){
	
}
 
 function print(msg){
	console.log(msg);
 }
 
 function getNumber(){
	
 }
 
 
 function test_loop(){
			 
	 // test things here 

	 
	 console.log("time begin: "+time.getCurrentTimeMMs());
	 if(conn.makeGetRequest(url) === 'false'){
		 console.log("time end 1 : "+time.getCurrentTimeMMs());
	 }
	 else{
		console.log("time end 2 : "+time.getCurrentTimeMMs());
	 }

 }

 test_main();