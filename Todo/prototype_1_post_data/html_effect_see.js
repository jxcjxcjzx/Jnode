// this is a test js file to see how the 
// html page code will render and perform

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var tmp_safehtmlname = "template.html";

var test_html_file_name = "tmp.html";

var htmlfile_syntax = ".html";

function FileExist(fPath)
{ 
     
}

function handle()
{

}


// function to check if the html name exists and contains the '.html' suffix
function legal_name_check(htmlname)
{
	if(fs.existsSync(htmlname))
	{	
		if(path.extname(htmlname)== htmlfile_syntax)
		{
			// passed the check 
			return htmlname;
		}
	}
	else{
		return tmp_safehtmlname;
	}
	
}




http.createServer(function(req,res){

	// prepare for the safe html file first
	if(!fs.existsSync(tmp_safehtmlname))
	{
	 // then create it automatically
	 console.log("file not exist , sorry ");
	}


	// console.log(req);
	
	// judge from the request url information
	var requesturl = req.url;
	var params = url.parse(requesturl);
	var pathname = params.pathname; 
	var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名 
	
	// now starts handle the post request
	// set the encoding method 
	
	var postData = "";
	req.setEncoding("utf-8");
	req.addListener("data",function(data){
		postData+=data;
		console.log("Received POST data :"+data);
	}
	);
	req.addListener("end",function(){
		handle();
	
	});
	
	switch(ext){
		case ".css":  
		  // push the css file
		 
		case ".jpg": 
		fs.readFile("."+requesturl, 'utf-8',function (err, data) {//读取内容 
			if (err) throw err; 
			res.writeHead(200,{'Content-Type':'image/jpg'});
			res.write(data); 
			res.end(); 
		});
		break;
		case ".js":
		fs.readFile("."+requesturl, 'utf-8',function (err, data) {//读取内容 
			if (err) throw err; 
			res.writeHead(200, { 
				"Content-Type": { 
				".css":"text/css", 
				".js":"application/javascript", 
				}[ext] 
			}); 
			res.write(data); 
			res.end(); 
		});
		break;
		default:
			if(params.query == 'testit')   // push the index html page
			{	
					res.writeHead(200,{'Content-Type':'text/html'});
					res.write(fs.readFileSync(legal_name_check(test_html_file_name)));
					res.end("check if the effect of html is ok, :) ");
			}	
			if(params.query == 'restart')   // push the index html page
			{	
					// here we provide a trick to restart the server
					// developers are allowed to modify the server 
					// functionality codes before restarting it.:)
					
			}	
	}
  }
).listen(1337);
console.log('Server running at http://you know the ip:1337/?testit');