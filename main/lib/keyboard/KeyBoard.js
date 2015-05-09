
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
 
 
 // thks to calculator.js 
 var key_map = {
		'13': 'enter',
		'48': '0',
		'49': '1',
		'50': '2',
		'51': '3',
		'52': '4',
		'53': '5',
		'54': '6',
		'55': '7',
		'56': '8',
		'57': '9',
		'106': '*',
		'107': '+',
		'109': '-',
		'111': '/',
		'110': '.',
		'96': '0',
		'97': '1',
		'98': '2',
		'99': '3',
		'100': '4',
		'101': '5',
		'102': '6',
		'103': '7',
		'104': '8',
		'105': '9',
		'61': '+',
		'187': '+',
		'173': '-',
		'189': '-',
		'191': '/',
		'190': '.',
	}
 