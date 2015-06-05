 
 var date = new Date();
 
 
 function getCurrentTimeMs(){
	return date.getTime();
 }
 
 function getCurrentTimeMMs(){
	return date.getMilliseconds();
 }
 
 
 module.exports = {
	
	getCurrentTimeMs : getCurrentTimeMs,
	getCurrentTimeMMs : getCurrentTimeMMs
 
 }