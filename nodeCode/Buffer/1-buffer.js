//  Buffer 类，该类用来创建一个专门存放二进制数据的缓存区
/*ascii r            u            n            o          o    b
*十进制  114         117           110          111             98
*二进制  0111 0010   0111 0101     0110 1110    0110 1111       0110 0010
*  HEX   72          75            6E           6F              62
*/
// runoob

const buf = Buffer.from('runoob', 'ascii');

// console.log(buf) // <Buffer 72 75 6e 6f 6f 62>
// console.log(buf.toString('hex')) // 72756e6f6f62
// console.log(buf.toString('utf-8'))
const buf2 = Buffer.from('com', 'ascii');
let res = Buffer.concat([buf, buf2]);
console.log(res.toString())