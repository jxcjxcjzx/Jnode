

// make some exploration here , first go to explore lib 
// to have the following realization realized

// just one prototype 
/*
var Promise = {
	 
	instance =  this ,
	
	judgeBoolean : false,
	
	defer : function (){
		
	},

	// here we add one condition judge, if condition is true,
	//	will stop and exec next func
	then : function(func,condition,timeOuts){
		if(!condition){
			judgeExec(func.apply(this),timeOuts);
		}
		return this;
	}

}
*/


// this is it, our new Asychronous new framework, nice and easy to use 
// try with it now !!

	var global_consts = {
	
		exec : false
		
		var taskQueue = {}
	
	}
	
	var taskManager = {
		
		function registerFunction(){
			
		}
		
		function execFunction(){
		
		}
		
		function removeFunction(){
		
		}
	
	}
	
	function init(){
	
		// init with a server run to sync all the required actions 
		http.createServer(function(req,res){
		// has to be simple 
			var requesturl = req.url;
			var params = url.parse(requesturl);	
			// for debug 
			console.log(" get request : "+requesturl);
				
			if(params.query == 'taskbegin')   // push the index html page
			{	
					// exec the function
			}	
		  }
		).listen(1340);
		// no need to console.log 
		// console.log('Server running at http://you know the ip:1340/?testit');
	
	}
	
	
	var Promise = {
	
		first : function(Func,args){
			
			// for debug 
			console.log(" in first global_consts.exec is : "+global_consts.exec);					
			Func.apply(this,args);			
			global_consts.exec = true;			
			return this;
		},
		
		// seems stupid here to use some repeated bunch of codes 
		then : function(Func,args){
		
			console.log(" in then global_consts.exec is : "+global_consts.exec);			
			console.log(" args is : "+args);		
			Func.apply(this,args);
			return this;
		},
		
		global : global_consts 

	}
	








// the detail usage :
 // doSth().then(doSth2).then(doSth);

module.exports = {

	Promise : Promise
	
	init : init 
	
}