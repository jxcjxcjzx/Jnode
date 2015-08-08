
var Date = {
	 function checkDate(fname){
		// first get the data string src
		validate(fname);
		
		var regex = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[4-8]|[2468][048]|[13579][26])00)-02-29)$/;
		
		if(fname.match(regex)){
			// it matches!
		}
		
		var simple_regex = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
		
		// a simple example
		var str = '2009-12-33'  
		// str can be matched 
		
	 }
}
