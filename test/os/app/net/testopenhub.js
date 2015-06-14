var https = require('https');
var http = require('http');
var fs= require('fs');

var fs = require('fs');
var downloadContent = "";



 var comm = require('../../../../main/src/lib/Comm/Asynchronous.js');
	
 
 // to find related softwares 
 //  similar_projects#list

function get(url,param,tmpfilename){
	
	var options = {
		hostname: url,
		port: 443,
		path: param,
		encoding: 'gzip',
		method: 'GET',
	};  
	
	var data = '';

  
	var req = https.request(options, function (res) {  
		// console.log('STATUS: ' + res.statusCode);  
		// console.log('HEADERS: ' + JSON.stringify(res.headers));  
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



function parsetitleprocess(){
	
	if(downloadContent.indexOf('</title>')!==-1){
		console.log(downloadContent.substring(downloadContent.indexOf('<title>')+7,downloadContent.indexOf('</title>')));
		jobDone();
	}else{
			// did not find 
			// console.log('error, still carry on ');
		    jobDone();
	}
	
}

function parsesummaryprocess(){
	
	if(downloadContent.indexOf('div id=\'project_summary\'')!==-1){
		console.log(downloadContent.substring(downloadContent.indexOf('div id=\'project_summary\'')+49,downloadContent.indexOf('div id=\'project_tags\'')-9));
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
	
	var tmp = comm.Promise.first(getprocess,['www.openhub.net,/p/1000']).then(parsetitleprocess,null).then(parsesummaryprocess,null);
	
	/*
	for(var i=1000;i<2000;i++){
		
		tmp = tmp.then(getprocess,['www.openhub.net,/p/'+i.toString()]).then(parsetitleprocess,null).then(parsesummaryprocess,null);
	
	}
	*/
	
	tmp.start();
	
}

main();

