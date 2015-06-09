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
		//console.log('STATUS: ' + res.statusCode);  
		//console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding('utf8');  
		res.on('data', function (chunk) {  
			data+=chunk;
		});  
		res.on('end',function(){
			store(data);
		});
	});  


	req.on('error', function (e) {  
		//console.log('problem with request: ' + e.message);  
		store(e.message);
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

function store(data){
	
	 // change a way now 
	 // fs.writeFileSync("tmp.html", data, {encoding:'utf-8'}, null);
	 downloadContent = data;
	 
	 jobDone();	
	 
}

function getprocess(param){

	var list = param.split(',');
    get(list[0],list[1]);
	
}



function parseprocess(fileaddr){
	
	// change a way now 
	/*
	var rs = fs.createReadStream(fileaddr,{encoding: 'utf8'});
	rs.on('data',function(data){
		 if(data.indexOf('</title>')!==-1){
			console.log(data.substring(data.indexOf('<title>')+7,data.indexOf('</title>')));
			jobDone();
		 }
		 else{
			// did not find 
			console.log('error, still carry on ');
			// jobDone();
		 }
	});		
	
	rs.on('error',function(e){
		 console.log(e.message);
	});
	
	rs.close();
	*/
	
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
	
	var tmp = comm.Promise.first(getprocess,['www.imooc.com,/learn/8']).then(parseprocess,['d://tmp.html']);
	
	for(var i=396;i<405;i++){
		
		tmp = tmp.then(getprocess,['www.imooc.com,/learn/'+i.toString()]).then(parseprocess,['d://tmp.html']);
	
	}
	
	tmp.start();
	
}

main();

// get("http://www.baidu.com");

