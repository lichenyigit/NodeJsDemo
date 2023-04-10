let fs = require('fs');

//创建文件夹
fs.mkdir('./img', err => {
    if(err){
        console.log(err)
    }
    else{
        console.log('文件创建成功')
    }
});

//删除目录
fs.rmdir('./img', err => {
    if(err){
        console.log(err)
    }
    else{
        console.log('文件删除成功')
    }
});