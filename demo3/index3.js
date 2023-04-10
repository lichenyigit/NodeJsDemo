//文件流写入
let fs = require('fs');
let ws = fs.createWriteStream('text3.txt');
ws.once('open', () => {
    console.log('通道打开');
    ws.write('财神保佑我,赚到50万\n');
    ws.write('财神保佑我,赚到50万\n');
    ws.write('财神保佑我,赚到50万');
    ws.end();
});

ws.once("close", ()=>{
    console.log('通道关闭');
});