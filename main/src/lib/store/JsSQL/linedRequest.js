// collect several sql queries together 
// in one line queued up, 
// and execute them later altogether 

 function query(sqlstatementarray){
	// 
	process.check(sqlstatementarray);
	process.split(sqlstatementarray);
	process.run();
 
 }
 
 
 var process = {
	
	waitingquque : {
	
		data : [],
		
		enqueue : function(){
		
		}
		
	},	
	
	check : function(content){
	
	},
 
	split : function(content){
		// parse split and store the array result 
		
	},
	
	run : function(){
		
	}
 
 };