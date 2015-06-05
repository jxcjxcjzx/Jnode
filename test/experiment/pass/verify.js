
 var rightpass = "123dcweecce";

 function verifypass(pass){
	
	for(var i=0;i<rightpass.length;i++){
		if(rightpass[i] === pass[i]){
			continue;
		}
		else{
			return 1;
		}
	}
	
	return 0;
	
 }
 
 
 module.exports = {
	verifypass : verifypass
 }