
// just get the title

var fs = require('fs');


var readStream = fs.createReadStream('./tmp.html');

readStream.on('data', function(chunk) { // ������������ʱ��д������
    chunk.contains("title");
	console.log('discovered! ');
});