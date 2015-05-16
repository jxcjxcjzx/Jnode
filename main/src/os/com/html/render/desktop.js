

// this is a test js file to see how the 
// html page code will render and perform

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


var desktopAll= "../../desktop/res/desktop.html";
var desktopPic = "../../desktop/res/desktop.jpg";
var desktopCss = "../../desktop/res/desktop.css";
var desktopJs = "../../desktop/res/desktop.js";


function desktop(){

	http.createServer(function(req,res){

		// prepare for the safe html file first
		/*
		if(!fs.existsSync(tmp_safehtmlname))
		{
		 // then create it automatically
		 console.log("file not exist , sorry ");
		}
		*/
		
		// judge from the request url information
		var requesturl = req.url;
		var params = url.parse(requesturl);
		var pathname = params.pathname; 
		var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名 
		
		
		switch(ext){	 
			// first three media pushes
			// too much options , separate them all
			case ".jpg": 
			fs.readFile("."+requesturl,function (err, data) {//读取内容 
				if (err) throw err; 
				res.writeHead(200,{'Content-Type':'image/jpg'});
				res.write(data);
				res.end(); 
			});
			
			break;
			
			case ".js": 
			fs.readFile("."+requesturl,function (err, data) {//读取内容 
				if (err) throw err; 
				res.writeHead(200,{'Content-Type':'text/javascript'});
				res.write(data);
				res.end(); 
			});
			
			break;
			
			case ".css": 
			fs.readFile("."+requesturl,function (err, data) {//读取内容 
				if (err) throw err; 
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write(data);
				res.end(); 
			});
			
			break;
			
			case ".html": 
			fs.readFile("."+requesturl,function (err, data) {//读取内容 
				if (err) throw err; 
				res.writeHead(200,{'Content-Type':'image/jpg'});
				res.write(data);
				res.end(); 
			});
			
			break;
			
			default:
				
				if(params.query == 'desktop')   // push the index html page
				{	
						// here we provide a trick to restart the server
						// developers are allowed to modify the server 
						// functionality codes before restarting it.:)
						// actually before restart you can modify the code in this server to achieve the efficient goal :)
						
						// actually when rebooting server did return something, but the client just won't receive, check this.
						res.writeHead(200,{'Content-Type':'text/plain'});
						res.write(fs.readFile("../desktop/res/desktop.html"));
						res.write('rebooting ..... wait a minute :) ');
						res.end();
						
				}	
				
				
				if(params.query == 'reboot')   // push the index html page
				{	
						// here we provide a trick to restart the server
						// developers are allowed to modify the server 
						// functionality codes before restarting it.:)
						// actually before restart you can modify the code in this server to achieve the efficient goal :)
						
						// actually when rebooting server did return something, but the client just won't receive, check this.
						res.writeHead(200,{'Content-Type':'text/plain'});
						res.write('rebooting ..... wait a minute :) ');
						res.end();
						
						thislineofcodejustdoesnotworkfornodejssorry
				}	
		}
	  }
	).listen(1339);
	console.log('Server running at http://you know the ip:1339/?testit');
}

module.exports = {
	serveDesktop : serveDesktop
}	