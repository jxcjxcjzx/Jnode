
  var ArrayList = (function(){
		
	function Iterator(array){
		var index=  0;
		this.hasNext = function(){
			return index < array.length;
		};
		this.next = function(){
			return array[index++];
		};
		this.remove = fucntion(){
			array.slice(index,1);
		};			
	};		
	
	
	
	function ArrayList(a){
		
		var array;
		
		if(a instanceof ArrayList){
			array = a.toArray();			
		}
		else{
			array = [];
			if(typeof a === "number"){
				array.length = a >0 ?a:0;
			}
		}		
		
		this.get = function(i){
			return array[i];
		};
		
		this.contains = function(item){
			return this.indexOf(item) >-1;
		};
		
		this.indexOf = function(item){
			for(var i=0,len=array.length;i<len;++i){
				// implement the equal function
				if(Equals(item,array[i])){
					return i;
				}
			}
		};
		
		this.lastIndexOf = function(){};
		
		this.add = function(arg){
			if(arg.length===1){
				array.push(arg[0]);  // for add(obj)
			}else if(arg.length===2){
				var arg0 = arg[0];
				if(typeof arg0 === 'number'){
					if(arg0>=0 && arg0 <array.length){
						array.splice(arg0,0,arg[1]); // for add(i,obg)
						
					}else {
						// error 
					}
					
				}else{
					//error 
				}
			}else {
				// error
			}	
		};
		
		this.addAll = function(){};
		
		this.size = function(){};
		
		this.set = function(){};
		
		this.remove = function(){};
		
		this.removeAll = function(){};
		
		this.isEmpty = function(){};
		
		this.iterator = function(){};
		
		this.clone = function(){};
		
		this.toArray = function(){};
		
		return array
		
	}());

	
	var HashMap = (function(){
		
		function HashMap(){
			if(arguments.length===1&&arguments[0] instanceof hashMap){
				return arguments[0].clone();
			}
			
			var initialCapiticy = arguments.length >0?arguments[0]:16;
			var loadFactor = arguments.length>1?arguments[1]:0.75;
			var buckets = [];
			buckets.length = initialCapiticy;
			var count = 0;
			var hashMap = this;
			
			function getBucketIndex (key){
				
			}
			function ensureLoad(){}
			
			function iterator(conversion,removeItem)(){
				function findNext(){}
				
				this.hasNext = function(){};
				
				this.next = function(){};
				
				this.remove = function(){};
				
				findNext();
			}
			
			function Set(conversion,isIn,removeItem){
				this.clear = function(){};
				this.contains = function(){};
				this.containsAll = function(o){};
				this.isEmpty = function(){};
				this.iterator = function(){
					return new Iterator(conversion,removeItem);
				};
				this.remove = function(){};
				// ......
				
			}
			
			function Entry(pair){
				this._isIn = function(map){
					return map === hashMap&&(pair.remove===undef);
				};
				this.equals = function(){};
				this.getKey = function(){};
				this.getValue = function(){};
				this.hashCode = function(){};
				this.setValue = function(){};
			}
			
			this.clear = function(){};
			this.clone = function(){};
			this.containsKey = function(){};
			
			this.entrySet = function(){};
			this.keySet = function(){};
		}
	
	}());


// the main functions will be provided :

charAt

lastIndexOf

match

replace

search 

Slice

substr

substring

length

toString

toLowerCase

toLocaleString

toUpperCase

toCharArray

Reverse

isContains

isEmpty

isNumeric

isInt

Trim

getNum

ByteLength

getEn

getCn

left

right

HTMLEncode

unicode

insert

copy

append















