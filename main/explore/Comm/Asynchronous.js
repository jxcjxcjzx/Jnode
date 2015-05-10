

// make some exploration here , first go to explore lib 
// to have the following realization realized

// corresponding to that in lib dir in main src 

// here provide a way to realize 
function doSth2(){
	var defer = Promise.defer();
	
	// do sth here 
	
	setTimeout(function(){
		defer.resolve();
	},1000)
	
	return defer.promise;
}

function doSth(){
	
}



// the detail usage :
doSth().then(doSth2).then(doSth);