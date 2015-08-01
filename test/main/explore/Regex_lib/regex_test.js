
// several test cases for regex parsing 

// first one , is web link url 
function run_test_1(){

	var regExp = /^((http?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\. ])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jo)+.......?$/
	
	if(urlstring.match(regExp)){
		return "is a url";
	}else{
		return "not a url";
	}



}