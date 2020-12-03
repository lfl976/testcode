const fs = require("fs");
const zlib = require("zlib");

// 压缩
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('zip.txt'));

// 解压
fs.createReadStream('zip.txt')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('unzip.txt'));




console.log('finish');