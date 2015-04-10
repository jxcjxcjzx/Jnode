// in this tiny file 
// a micro lisp-2-js translating 
//  tool is created, just for testing , 
// or something called DSL(Dommain-Specified-Language)

// by jxc 2015/04/08
// reference from lisp2js open-sourced file






exports = {
	
	function lisp2js(lisp_program_fragment){
		
		// so some simple calculating here
		// and return the result
		
		
	}


}


// bunches of functions to parse and calculating 
// the tasks specified by lisp programs 
function tokenize(){


}

function parse(){

}




// may have a spelling error of word "atome"
functionArray atomeFunction[] = {
	// some basic functions in js to 
	// form the basic of calculating
	add:{}
	
	minus:{}
	
	print:{}
	
	eval:{}
	
	// ect .... can be added some other functions

}



function calculating(){
	

}


/*
 here is how people may use this tool:
	<script>
		var output = lisp.compile("(def x 12)");
	</script >

*/


// one possible way of implementation
var lisp_modules = function() {

	var lexer,parser,compiler,lisp_compiler;
	var macros = {};
	var eval_results = "";
	var global_context = null;
	
	var append = function(x,y){
	
	}
	
	lexer = function(input_string){
	
	}
	
	
	



}


// another kind of implementation
var lisp = function(){

}

lisp.empty = function(list){
	if(list.length = 0) return true;
		else return false;
}

lisp.isList = function(list){
	return list.constructor = Array;
}

lisp.car = function(list){
	if(lisp.empty(list)) return [];
	return list[0];
}

lisp.cdr = function(list){
	if(lisp.empty(list)) return [];
	return list.slice(1);
}

lisp.cadr = function(list){
	if(lisp.length<2) return null;
	else return list[1];
}

lisp.caddr = function(list){
	if(lisp.length<3) return null;
	else return list[2];
}

lisp.cons = function(item,list){
	
}

lisp.append = function(list1,list2){
	
}

lisp.map = function(list,func){
	
}

lisp.square = function(x){
	
}

lisp.abs = function(x){
	
}

lisp.pow = function(x){
	
}

lisp.random = function(l,r){
	
}

lisp.list = function(){
	
}



// the last but not the least , reference from littlelisp implementaation

// just run  'node littlelisp.js' to do what you want

