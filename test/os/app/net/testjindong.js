var http = require('http');
var fs= require('fs');
var downloadContent = "";
var comm = require('../../../../main/src/lib/Comm/Asynchronous.js');


var baseUrl = "z.jd.com";
var baseParam = "/getGuessProjectInfo.action?projectId=";
	
// var list = [{projectId:'11010'},{projectId:'12700'}];
// tmp solution 
var indexadd = 0;
var indexdel = 0;


var counthcjsb = 200;
 var list = [762,12740,11747,10857,12205,13797,9532,13697,13054,12981,13694,10304,10035,10506,5030,11813,11139,12896,9632,6175,13751,12033,11046,9532,10416,13642,10506,13428,11363,14482,13054,13510,10777,11576,13849,10130,6981,12610,10559,10560,13694,10506,10581,11623,13582,13471,9532,14090,11576,762,13360,8534,13697,13699,12940,11623,11310,7566,10506,12666,11363,12229,13582,13510,8534,11446,12700,10777,12981,10506,12940,13590,13803,11409,11310,10581,14482,12007,13471,14090,12381,12896,10729,13227,11813,13563,7980,11623,13005,11310,12981,13471,13900,13935,12007,11296,9632,13849,11446,11529,11813,10559,12610,13610,12981,13471,13273,11310,13054,11312,5030,13510,12666,13227,11576,9632,10559,14246,12981,13699,7747,13428,12666,11409,13900,8158,13510,10506,11529,12700,13227,6175,11623,13697,13590,10506,10581,11310,11409,12666,9844,10035,13430,13428,13849,11576,11107,11446,13602,7980,12095,11623,13471,10506,12981,12666,13900,8158,13054,10506,12541,12666,9632,13822,11623,13789,12981,10506,10304,13005,12699,12666,9532,13582,13325,13510,11107,8534,12381,13610,10622,12095,14246,13590,13428,12666,13005,11409,14482,10035,13054,14090,762,11529,12700,14396,13610,6981,10622,11623,13054,13642,12699,7566,13325,11813,10506,12007,762,9632,12541,8534,12095,13697,13405,12981,13642,12666,10304,7566,14482,12928,10035,13900,11446,10130,12541,12700,10506,13697,14246,
13590,10581,12285,11623,13471,13428,13900,8158,9844,11139,11446,14396,10729,13699,13590,12610,10622,13803,12666,13576,13005,11813,11296,5030,9532];



  
		 
var projects = [];
	
// add a lock hold - release pair !! 	
	
 

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
		res.setEncoding('utf8');  
		res.on('data', function (chunk) {  			
			// console.log(chunk);
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
	 // console.log(data);
	 
	 downloadContent = data;
	 jobDone();	
	 
}

function getprocess(param){

	console.log('list 3 is : '+list[3]);
	
	console.log(param);
	
	 console.log('list is : '+list);
	
	var paramlist = param.split(',');
    get(paramlist[0],paramlist[1]);
	
}



function parseprocess(){
		
	var jsonobj = eval('('+downloadContent+')');
	
	for(var i=0;i<4;i++){
		 console.log(jsonobj[i].projectId);	
		// judge repeat 

		 list[indexadd++] = 		 
		    jsonobj[i].projectId
		 ;
		
		console.log("length is ; "+list.length);
		 
		
	}
	
	// console.log("length is ; "+list.length);
	
	 console.log("length is before ; "+list.length);
	
	jobDone();	
}


function main(){
	// console.log("is execting func1");
	comm.init();
	
	
	var seedurl = baseUrl;
	var seedparam = baseParam;
	var seed = '6175';

	
	// need to make adjustment to Comm lib !!!!!!!!!!!!!!!!! , the param can not 
	// be run-time bound !!!!!
	
	var tmperev = comm.Promise.first(getprocess,[seedurl+","+seedparam+seed]).then(parseprocess,null);
	
	for(var i=0;i<counthcjsb;i++){
		tmperev = tmperev.then(getprocess,[seedurl+","+seedparam+list[0]]).then(parseprocess,null).then(getprocess,[seedurl+","+seedparam+list[1]]).then(parseprocess,null).then(getprocess,[seedurl+","+seedparam+list[2]]).then(parseprocess,null).then(getprocess,[seedurl+","+seedparam+list[3]]).then(parseprocess,null);
	}
	
	tmperev.start();
	
	
	console.log("length is : "+list.length);

}

main();


