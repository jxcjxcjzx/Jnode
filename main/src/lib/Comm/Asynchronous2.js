// make some exploration here , first go to explore lib 
// to have the following realization realized
//some simple imports 
var http = require('http');
var url = require('url');

// this is it, our new Asychronous new framework, nice and easy to use 
// try with it now !!
	var oneSimpleTaskStructure = {	 
		 // just showing what a task structure should be like 
		 FuncObj : null,
		 context : null,
		 Args : 0,			
		 CallbackAddr : null		
	}
	var global_consts = {	
		exec : false,		
	    taskQueue : []	
	}	
	var taskManager = {		
	    registerFunction : function(Func,context,args,CallbackAddr){
			global_consts.taskQueue.push(
				{
					 FuncObj : Func,
					 context : context,
					 Args : args,			
					 CallbackAddr : CallbackAddr
				}
			);
		},		
		execFunction : function(){
			var task = global_consts.taskQueue.shift();
			if(!task) { 
				// for debug 
				// console.log("task is null , sorry ... ");
				return;
			}
			// for debug 
			 // console.log("task is ready  , task is : "+task);
			task.FuncObj.apply(task.context,task.Args);
		}			
	}	
	function init(){	
		// well do nothing .
	}		
	
	function defer(){
		// trigger the next move 
		taskManager.execFunction();
	}
	
	var Promise = {	
		first : function(Func,args){		
			// for debug 
			// console.log(" in first global_consts.exec is : "+global_consts.exec);					
			// Func.apply(this,args);			
			// this variable not used yet 
			taskManager.registerFunction(Func,this,args,null);
			global_consts.exec = true;			
			return this;
		},		
		// seems stupid here to use some repeated bunch of codes 
		then : function(Func,args){		
			// console.log(" in then global_consts.exec is : "+global_consts.exec);			
			// console.log(" args is : "+args);		
			// add to function list 
			taskManager.registerFunction(Func,this,args,null);
			return this;
		},		
		start : function(){				
			// add to function list 
			// temporarily removed 
			// if(taskManager.taskQueue.length>0){
				taskManager.execFunction();
			// }
			// no return of this at the beginning point 
			// return this;
		},		
		global : global_consts 
	}	
// the detail usage :
 // doSth().then(doSth2).then(doSth);
module.exports = {
	Promise : Promise,
	init : init,
	defer : defer 
}