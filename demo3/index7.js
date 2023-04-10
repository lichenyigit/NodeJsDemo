//读取流与写入流以及管道
let fs = require('fs');
let rs = fs.createReadStream('img.png');
let ws = fs.createWriteStream('img22.png');

//创建管道，将读取流通过管道流出
rs.pipe(ws);