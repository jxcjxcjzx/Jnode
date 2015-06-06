
// dot('light'), or dot('dark')

var canvas = document.getElementById('thecanvasid');

var ctx = canvas.getContext('2d');

function dot(color){
	ctx.fillStyle = color=="light"?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.7)";
	ctx.strokeStyle = color=="light"?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.7)";
	ctx.strokeRect(-1*w/2,-1*w/2,w,w);
}

function turn(){
	ctx.rotate(Math.PI/2);
}