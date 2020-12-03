const fs = require("fs");
const data = "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。";
let writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');
writeStream.end();

writeStream.on('finish', function() {
	console.log('finish');
})
writeStream.on('error', function(err) {
	console.log(err)
})


