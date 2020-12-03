var http = require('path');

const server = http.createServe(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.end('Hello World\n');
})

server.listen(1337)
console.log('Server running at http://127.0.0.1:8888/')