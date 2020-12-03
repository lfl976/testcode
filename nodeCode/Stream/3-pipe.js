// 管道流

const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

console.log('finish');
