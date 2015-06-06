
var linkcounts = [1,2,3,4 ...... ];

var colors = [];

var cssentiretags = [];

var cssbodytags = [];

var cssh1tags = [];

var csscanvastags = [];

var csslogotags = [];

var cssspantags = [];

var cssspintags = [];


function initAllTagsWithDefaults(){
	// init with defaults which is empty structure here like {}, of course :)
	
}


var collectedColors = {
	
	colors[linkcounts[1]] = rgba(16,63,236,0.75);
	colors[linkcounts[2]] = rgba(37,172,162,0.75);
	colors[linkcounts[3]] = rgba(233,124,32,0.75);
	colors[linkcounts[4]] = rgba(95,33,203,0.75);
	colors[linkcounts[5]] = rgba(235,67,35,0.75);
	colors[linkcounts[6]] = rgba(190,28,65,0.75);
	colors[linkcounts[7]] = rgba(208,57,159,0.75);
	colors[linkcounts[8]] = rgba(150,32,198,0.75);
	

}


var constants = {
// entire tags 
	cssentiretags[linkcounts[1]] = {
		font-family:"Roboto",
		color:#F4F4F4,
		font-weight:300,
		padding:0,
		margin:0
	},
	
// body tags 	
	cssbodytags[linkcounts[1]] = {
		background:#4fb0c5,
		font-size:30px,
		margin:10% 10% 50px 10%
	},
	
	cssbodytags[linkcounts[2]] = {
		background:#fff,
		font-family:'HelveticaNeue-Light','Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,sans-serif,
		color:#fff,
		font-size:24px
	},
	
// h1 tags 	
	cssh1tags[linkcounts[1]] = {
		font-family:'Roboto Slab'
	},
	
	cssh1tags[linkcounts[2]] = {
		font-weight:lighter,
		font-size:1.75em,
		margin:0.25em auto 1em,
		max-width:6em
	},
	
	
// canvas tags 	
	csscanvastags[linkcounts[1]] = {
		position:absolute,
		right:0,
		top:0
	},
	
// log tags , just for simple reference 
	csslogotags[linkcounts[1]] = {
		width:8em,
		position:absolute,
		left:1em,
		right:1em
	},
	
// span tags , just for simple reference 
	cssspantags[linkcounts[1]] = {
		display:block,
		position:absolute,
		top:calc(50%-10em),
		left:calc(50%-10em),
		width:20em,
		height:20em
	},	
	
// spin tags , simple css animation
	cssspintags[linkcounts[1]] = {
		animation: spin 10s linear
		infinite;
	},	
	
	/*
		@keyframes spin{
			0%{
				transform : rotateZ(0);
			}
			100%{
				transform : rotateZ(360deg);
			}
		}
		
	*/
	
	cssspintags[linkcounts[2]] = {
		animation: spin-pulse 20s linear
		infinite;
	},	
	/*

		@keyframes spin-2{
			0%{
				transform : scale(1);
			}
			50%{
				transform : scale(0.9);
				rotateZ(180deg);
			}
			100%{
				transform : scale(1);
				rotateZ(360deg);
			}
		}
	*/
	
//circle tags 	
	csscircletags[linkcounts[2]] = {
		border-radius:50%,
		left:calc(50%-6.25em),
		top:calc(50%-12.5em),
		transform-origin:50% 12.5em
		width:12.5em,
		height:12.5em,
		position:absolute,
		border-top:0.1em solid rgba(255,255,255,0.4)
		// box-shadow:0 1em 2em  rgba(0,0,0,0.5)
	},		
	
	
	
};
	