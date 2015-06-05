var http = require('http');
var url = require('url');



 
 var verify = require('./verify.js');
 
 var result = 0;
 
 
 http.createServer(function(req,res){

	// judge from the request url information
	var requesturl = req.url;
	var params = url.parse(requesturl);
	
	if(params.query !== null)   // push the index html page
	{	
		
		console.log(params.query);	
		
		 result = verify.verifypass(params.query);
		// result = 0;
		
		res.writeHead(200,{'Content-Type':'text/plain'});
		if(result == 0){
			res.write("true");
		}
		else{
			res.write("false");
		}
		res.end();
			
	}	

			
 }
).listen(1350);