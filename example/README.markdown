the example dir in Jnode project 
===


provides some examples using APIs and functionaities provided in Jnode project, must some simple ones. 

what is this dir for ?
--

just put everything which can make codes in src of Jnode project more understandarable here. 


**attention here**, it is free if the example is ahead before the implementatiuon , which means even the sample is finished, but it is not runnable currently, it is a ref for implementation. anyway, it is ok , always . 


how this dir is organized ? 
---

the file will in the fromat of name.ref.function.from.to, for example, one bunch of codes of url thing will be like this :  
	
	var Download = require('download');

	const URL_1 = "http://xxxx";
	const URL_2 = "http://xxxx";
	const URL_3 = "http://xxxx";

	Download({extract : true, strip : 1 })
	.get(URL_1,'deps/addr1')
	.get(URL_2,'deps/addr2')
	.get(URL_3,'deps/addr3')
	.use(progress())
	.run(function(err)
	{
		// catch some errors 	
	}
	)

it will be named like this :

	hwotousedownloadlib.ref.NODEOSdownload.download

inside the above name, the *from* means whre the ref comes from, like project name or filename or language category, and the *to* means where is this kind of functionality lies in, like download module in Jndoe system. and then it is very obviously these samples will be clarified into several dirs, like the ref files in linux dir means this function ref comes from the linux system source code. 


tips in the end 
--

the ToDo lib is moved here , which plays exactly the same role like codes here in this lib .