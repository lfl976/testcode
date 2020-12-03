const fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk) { // 小文件，一次就读完
	console.log(chunk+'*************')
})

readerStream.on('error', function(err) {
	console.log(err)
})