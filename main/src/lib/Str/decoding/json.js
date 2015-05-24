// simple sample to demo how to use json in js 

var  t = require('./data.js').sampleData;


var jsonobj = eval('('+t+')');

for(var i=0;i<50;i++){
	console.log(jsonobj.subjects[i].original_title);
}



// stringifier  is verse of the parse , which isto turn the js obj to json obj