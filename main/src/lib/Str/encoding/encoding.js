// thanking list :
// Processing.js



 function virtHashCode(obj){
	if(){
		var hash = 0;
		for(var i=0;i<obj.length;i++){
			hash = (hash*31+obj.charCodeAt(i)& 0xFFFFFFFF);
		}
		return hash;
	}
	if(typeof (obj) !== "object"){
		return obj&0xFFFFFFFF;
	}
	// learn about this kind of implementation 
	if(obj.hashCode instanceof Function){
		return obj.hashCode();
	}
	if(obj.$id === undef){
		obj.$id = ((Math.floor(Math.random()*0x10000)-0x8000)<<16)|Math.floor(Math.random()*0x10000);
		
	}
	return obj.$id;
	
	
 }
 
 // reference from Qt 
 function codeFromName(name){
	// name sample : "GB2312"
	
 
 }
 
 function setCodecForLocale(codec){
 
 }
 
 function setCodecForStrings(codec){
 
 }
 
 function setCodecForTr(codec){
 
 }
 
 
 