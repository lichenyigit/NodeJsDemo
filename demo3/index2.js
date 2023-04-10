//异步操作文件
let fs = require('fs');
fs.open('text2.txt', 'w', (err, fd) => {
    fs.writeFile(fd, '财神，保佑我赚钱', err1 => {
        if(!err1){
            console.log('写入完成');
            fs.close(fd, ()=>{
                console.log('文件关闭完成');
            });
        }else{
            console.log(err1)
        }
    });
});