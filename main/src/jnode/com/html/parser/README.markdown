the html library
=====

actually this lib should not be here, but the reason it   
**is** put here is that this is so important, for a system   
that put enfisice on UI display and interaction with human being. 


about the reliance
---

the parser lib in this dir is the key, but as thought this is not   
implemented directly but wrapper function lib in os/com corresponding lib.   


something about ref  to make 
--

there is one sample of using this html parsing lib, this is it :  

	var htmlparser = require htmlparser
	var rawHtml = xxx
	var handler = new htmlparser.DefaultHandler(function(err,dom){
		if err ...
		else [..parse done, do something...]
	})
	var parser = new htmlparser.Parser(handler)
	parser.parseComplete(rawHtml)
	sys.put(sys.inspect(handler.dom,false,null))

the above thing made from the NodeHtmlParser

plus
--

the way here to include system libs is a bit different from that from outside world,   
do mistake it, just because there will be a need for different strategies such as system trace and logging. so the things in COM lib will not apply here. 