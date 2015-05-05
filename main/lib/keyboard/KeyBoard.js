
 // handle keyboard event , first add listener
 addEventListener("keydown",function(e){
		
	keysDown[e.keyCode] = true;
 },false);
 
  addEventListener("keyup",function(e){
		
	delete keysDown[e.keyCode];
 },false);
 
 // the above writing style is for convenience of key-conbination judgement
 
 var update = function(){
	if(87 in keysDown) { // up
		// do somehting for up arrow key
	}
	
	if(83 in keysDown) { // down
		// do somehting for down arrow key
	}
	
	if(65 in keysDown) { // left
		// do somehting for left arrow key
	}
	
	if(68 in keysDown) { // right
		// do somehting for right arrow key
	}
 
 
 }