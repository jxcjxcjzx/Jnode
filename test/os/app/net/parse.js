
// just get the title

var fs = require('fs');


var readStream = fs.createReadStream('./tmp.html');

readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
    chunk.contains("title");
	console.log('discovered! ');
});