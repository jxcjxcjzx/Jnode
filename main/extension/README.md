the extension dir in Jnode project 
==


extensions provider, also as a loader for applications .

one quick ref or example 
--
	//读取当前目录下的app目录，
	fs.readdir('./app',fucntion(err,apps){
		if(err) .. 	
		else {
			for i in apps 
				var a = apps[i]
				try 
					if app.exost 
						loadApp(path.resolve('./app',appname))  // then 
				catch exceptions 
		}
	})


so from the above example, one uniformed protocol or rule for all applications is needed. 


the app framework 
---

一个应用的框架， 这里参照lonichina中的应用框架进行构建:

	app 
	-- css
		--- bootstrap.min.css
		--- style.css
	-- fonts
	-- img
	-- js
		--- controllers
			---- app.js
			---- CommanderService.js
			---- directives.js
			---- filter.js
			---- pluginService.js
			---- router.js
			---- services.js
		--- lib  // usable libs for use from the jnode lib
			---- ckplayer
			---- jnode
			---- ng-bindonce
			---- ng-local-storage
			---- ng-text-truuncate
			---- ngCordova
			---- validate
		--- templates
			---- index.html			

so this is the templates of an app 