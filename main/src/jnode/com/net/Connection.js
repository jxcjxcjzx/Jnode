/* 
 
 var ajax = {
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	if(xhr.overrideMimeType){
		xhr.overrideMimeType("text/plain");
	}
	xhr.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");
	xhr.send(null);
	
	if(xhr.status !== 200 && xhr.status !==0) {
		throw("XMLHttpRequest failed, status code is : "+xhr.status);
	}
 };
 
 */