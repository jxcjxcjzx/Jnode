



function checkBrowser(){

	var browser = {
		version:function(){
			var u = navigator.userAgent,app = navigator.appVersion;
			
			return {
				// the mobile information 
				trident:u.indexOf('Trident') >-1, // ie core 
				presto:u.indexOf('Presto') >-1, // opera core 
				webKit:u.indexOf('AppleWebKit') >-1, // apple and google core 
				gecko:u.indexOf('Gecko') >-1 && u.indexOf('KHTML')==-1, // filefox core 
				mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), // mobile device 
				ios: !!u.match(/\\(i[^:]+:(U:)?CPU.+Mac OS X/),  // the ios terminal 
				android: u.indexOf('Android')>-1|| u.indexOf('Linux')>-1, // android terminal or UC browser 
				iPhone: u,indexOf('iPhone') >-1 || u.indexOf('Mac') >-1, // iPhone or QQHD browser 
				iPad: u.indexOf('iPad')>-1,  // if is iPad
				webApp: u.indexOf('Safari')==-1 // if is web app 	
			};
			
		}(),
		language :(navigator.browserLanguage|| navigator.language).toLowerCase()	
	}
	
	if(browser.versions.android|| browser.versions.iPhone|| browser.versions.iPad){
		window.location.href = "http://m.xxx.xxx"  // modify the http link addr if is mobile visit 
	}

}