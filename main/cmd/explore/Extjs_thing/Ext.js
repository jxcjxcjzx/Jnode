
 // the simple ext js test
 
 var Ext = Ext || {};
 // implement the Date object later 
 Ext.startTime = new Date().getTime();
 
 ( function(){
	var global = this,
	objectPrototype = Object.prototype,
	toString = objectPrototype.toString,
	emptyFn = function(){},
	callOverrideParent = function(){
		var method = callOverrideParent.caller.caller;
		return method.$owner.prototype[method.$name].apply(this,arguments);
		
	},
	i;
	
	Ext.global = global;
	
	Ext.apply = function(object,config,defaults){
		if(defaults){
			Ext.apply(object,defaults);
		}
		
		if(object && config && typeof config === 'object'){
			var i,j,k;
			
			for(i in config){
				object[i]=config[i];
			}
			
			// figure out what enumerables is for yourself
			if(enumerables){
				for(j=enumerables.lengthlj--;){
					k = enumerables[j];
					if(config.hasOwnProperty(k)){
						object[k] = config[k];
					}
				}
			}			
		}
		return object;
	};
	
	
	
   }
 
	Ext.globalEval = Ext.global.execScript 
		?function(code){
			execScript(code);
		 }
		 :function($$code){
			( function(){
				eval($$code);
			  }()
				
			);
		 };
		};
 
 )