let fs = require('fs');
fs.readFile('img.png', (err, data) => {
    if(!err){
        //console.log(data);
        fs.writeFile('img1.png', data, (err1, data1) => {
            if(!err1){
                console.log('图片写入成功')
            }
            else{
                console.log('图片写入失败')
            }
        });
    }else{
        console.error(err);
    }
});