let fs = require('fs');
//删除文件
/*fs.unlink('text1.txt', err => {
    if(err){
        console.log(err)
    }
    else{
        console.log('文件删除成功')
    }
});*/
//读取目录下的所有文件
fs.readdir('./', (err, files) => {
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
});