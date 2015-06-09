var http = require('http');
var fs= require('fs');

var fs = require('fs');
var downloadContent = "";



 var comm = require('../../../../main/src/lib/Comm/Asynchronous.js');
	
 

function get(url,param,tmpfilename){
	
	var options = {  
		hostname: url,  
		port: 80,  
		path: param,  
		encoding: 'gzip',
		method: 'GET'  
	};  
	
	var data = '';
  
	var req = http.request(options, function (res) {  
		// res.setEncoding('utf8');  
		res.on('data', function (chunk) {  
			data+=chunk;
			console.log(chunk);
		});  
		res.on('end',function(){
			store(data,tmpfilename);
		});
	});  


	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		console.log(e.message);
	});  
	  
	req.end(); 
	

}

function jobDone2(){
	
	// using this way of inform will have problems, after 6 requests
	// it just stuck , don't know why ...... 
	console.log('jobdone.. ');
	
	var options = {  
		hostname: '127.0.0.1',  
		port: 1340,  
		path: '/?taskbegin',  
		encoding: 'utf-8',
		method: 'GET'  
	};  
	
	var req = http.request(options, function (res) {  				
	});  
	
	req.on('error', function (e) {  
		console.log('problem with request: ' + e.message);  
	});
	
	req.end(); 
	
	console.log('jobdone end...  ');
	
}


// for Comm lib execution 
function jobDone(){
	
	http.get({host:'127.0.0.1', port:1340, path:'/?taskbegin',agent:false},function(res) {});
	
}

function store(data,filename ){
	
	 // change a way now 
	 // fs.writeFileSync("tmp.html", data, {encoding:'utf-8'}, null);
	 
	 console.log('file to be saved is : '+filename);
	 
	  fs.writeFileSync(filename,data);
	 
	 // jobDone();	
	 
}

function getprocess(param){

	var list = param.split(',');
    get(list[0],list[1],list[2]);
	
}


function downPic(url){

	
}


function parseprocess(fileaddr){
	
	if(downloadContent.indexOf('</title>')!==-1){
		console.log(downloadContent.substring(downloadContent.indexOf('<title>')+7,downloadContent.indexOf('</title>')));
		jobDone();
	}else{
			// did not find 
			// console.log('error, still carry on ');
		    jobDone();
	}
	
}


function main(){
	console.log("is execting func1");
	comm.init();
	
	// 8---404
	
	// http.request('').pipe(fs.createWriteStream('4918554.png'));
	
	 var tmp = comm.Promise.first(getprocess,['www.myexception.cn,/img/2014/06/02/20061442.jpg,4918554.png']);
	/*
	
	for(var i=396;i<405;i++){
		
		tmp = tmp.then(getprocess,['www.imooc.com,/learn/'+i.toString()]).then(parseprocess,['d://tmp.html']);
	
	}
	*/
	 tmp.start();
	
}

main();

// get("http://www.baidu.com");

