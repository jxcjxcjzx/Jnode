 // transmit this to other parts of this code tree later 
 
var http = require('http');
var url = require('url');
 
 var date = new Date();
 
 var count  = 0 ;
 
 http.createServer(function(req,res){

	// judge from the request url information
	var requesturl = req.url;
	var params = url.parse(requesturl);
	
	count ++; 
	
	if(params.query == "getcount")   // push the index html page
	{	
		
		console.log(params.query);	

		
		res.writeHead(200,{'Content-Type':'text/plain'});
		
		// transform it 
		res.write(count);
		res.end();
			
	}	

			
 }
).listen(1351);