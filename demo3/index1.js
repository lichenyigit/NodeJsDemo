const fs = require('fs');
//同步文件操作
let fd = fs.openSync('text1.txt', 'w');
fs.writeSync(fd, 'ni hao');
fs.closeSync(fd);