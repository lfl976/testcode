var http = require('http')
var url = require('url');
var fs = require('fs')

// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Contennt-Type': 'text/plain'})
// 	console.log(req.url)
// 	res.end(req.url)
// }).listen(8000, '127.0.0.1',() => {
// 	console.log('listen ...')
// })

// fs.appendFile('mynewfile1.text', 'Hello world', function(err){
// 	if(err) throw err;
// 	console.log('saved')
// })

fs.unlink('mynewfile1.text',function(err) {
	if(err) throw err;
	console.log('file deleted')
})