

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
	
	var Promise = {
	
		first : function(Func,args){
			Func.apply(this,args);
			return this;
		},
		
		// seems stupid here to use some repeated bunch of codes 
		then : function(Func,args){
			Func.apply(this,args);
			return this;
		}

	}
	








// the detail usage :
 // doSth().then(doSth2).then(doSth);

module.exports = {

	Promise : Promise
	
}