//读取流与写入流以及管道
let fs = require('fs');
let rs = fs.createReadStream('img.png');
let ws = fs.createWriteStream('img2.png');
//监听读取流
rs.once('open', ()=>{
    console.log('监听读取流');
});
//监听流关闭
rs.once('close', ()=>{
    console.log('读取流关闭');
});

//监听读取流
ws.once('open', ()=>{
    console.log('监听写入流');
});
//监听流关闭
ws.once('close', ()=>{
    console.log('写入流关闭');
});

//数据通过流写入
rs.on('data', data => {
    ws.write(data);
});