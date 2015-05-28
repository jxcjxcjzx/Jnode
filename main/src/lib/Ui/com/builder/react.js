/* 
 part of react .js v0.13.0
*/

(function(){

	React.version = "0.13.0";
	




})

module.exports = React;


'use strict';

var plugin = {

	Input: function(){},

}

function prefixKey(prefix,key){
	return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

var prefixs = ['Webkit','ms','Moz','O'];

var assgin = _dereq_(27);

function CallbackQueue(){
	this._callbacks = null;
	this._contexts = null;
}

assgin(CallbackQueue.prototype,{
	enqueue: function(callback,context){
		this._callbacks = this._callbacks || [];
		this._contexts = this._contexts || [];
		
		this._callbacks.push(callback);
		this._contexts.push(context);
	},
	
	notifyAll : function(){
		....
		callbacks.call(context[i]);
	},
	
	reset : function(){},
	
	destructor : function(){}
});


module.exports = CallbackQueue;

function startWatchingForValueChange(target,targetId){
	
	...
	activeElement.attachEvent('onpropertychange',handlePropertyChange);

}

function stopWatchingForValueChange(){}


function shouldUseClickEvent(elem){}

function insertChildAt(parentNode,childNodes,index){

}

var DOMPropertyInjection = {
	
	for(var propName in Properties ){
		each(do sth. ... );
	}

}


var ExecutionEnvironment = [];








