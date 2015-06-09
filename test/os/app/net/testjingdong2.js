var http = require('http');
var fs= require('fs');

var fs = require('fs');
var downloadContent = "";



 var comm = require('../../../../main/src/lib/Comm/Asynchronous.js');
	
 
 var projectId = [11576,14246,11386,13600,12379,13900,13054,13471,10882,11310,13855,13861,8621,12384,10304,12198,9976,12627,13598,11129,11554,13900,13470,5030,11310,11782,11296,13470,12969,13861,10571,13291,13908,13849,9844,11129,13694,11654,9959,10882,13273,13428,12969,7108,12261,8621,11141,13908,9532,11576,12748,10198,13398,13822,13428,13273,10752,13471,10752,11554,13861,8621,12777,9976,13849,11576,13500,9853,12619,9844,12269,13680,11782,13470,5030,12969,12541,12668,12198,9532,12627,12928,12748,11129,12619,9853,13452,11310,10416,11296,12969,12541,11312,8621,12095,9976,9676,13789,13642,12802,11554,12748,10729,5030,13471,10592,11312,12700,12384,6730,13908,9676,13075,11576,11654,13586,13822,11129,14370,5030,13500,10882,12198,12541,12969,13861,12327,9532,10304,13776,13600,13586,12666,12619,10729,10752,5030,7452,12261,7108,11312,12668,12777,12928,13840,14246,13586,10198,12379,9853,13471,10416,10882,13452,5030,14482,8158,12668,13776,10571,12627,13849,13586,13900,12802,13398,14370,10416,10729,13680,11129,12668,8621,12541,12198,12777,13075,13840,13694,13642,12666,13398,13680,5030,12269,11310,13861,11782,12969,12384,12198,10571,9676,12928,6730,13600,13398,11554,10729,7452,11782,12269,7108,13798,13470,12541,12777,10304,12627,12748,12802,12619,13600,13900,13500,13470,11296,9042,8158,11554,6730,11129,13849,10571,12777,13075,13600,13398,11554,13792,10882,10729,11296,13471,10752,11782,7108,13855,6175,13075,13291,12627,13586,12666,11554,11129,12699,5030,14370,10592,12261,12668,13855,13470,12095,13849,10571,1384011386,11046,13822,13598,12269,5030,13054,10882,8158,13470,11554,13855,13789,6175,11576,12095,11129,12802,12666,12379,13471,14370,13452,10416,13798,12969,11554,5030,12627,12095,10304,14246,11554,13398,13500,11386,13428,13500,14370,10592,12384,11296,12700,13798,6175,9532,12198,12327,13598,13792,9853,12748,13452,9042,13428,12740,14482,11296,6730,13798,11576,13776,12095,12327,13792,12619,9844,6730,13470,13273,10416,7452,6730,12700,14482,11554,12777,12327,13849,9532,12802,12748,13500,13900,11310,13471,10882,10752,12700,11296,10752,12384,10304,6175,11576,12198,9844,12379,13500,13642,11310,13428,5030,10752,11782,12384,12198,11312,13908,9976,12198,13840,13398,13822,12802,13600,13452,10592,13054,10416,5030,11554,12668,10752,12627,12198,13908,13776,13642,12619,13598,13398,13470,5030,14370,10592,14482,7108,10752,11641,13291,9976,13840,13908];
 
 
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
	
	var tmp = comm.Promise.first(getprocess,['z.jd.com,/project/details/'+projectId[0].toString()+'.html']).then(parseprocess,null);
	
	
	for(var i=1;i<200;i++){
		
		tmp = tmp.then(getprocess,['z.jd.com,/project/details/'+projectId[i].toString()+'.html']).then(parseprocess,null);
	
	}
	
	
	tmp.start();
	
}

main();

// get("http://www.baidu.com");

