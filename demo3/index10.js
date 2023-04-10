let fs = require('fs');

//递归删除非空目录
function delDir(path) {
    let filesArr = fs.readdirSync(path)
    for (let i in filesArr) {
        //console.log(path + "" + filesArr[i])
        const itemPath = path + "" + filesArr[i];
        //读取文件信息
        let stat = fs.statSync(itemPath);
        if(stat.isFile()){
            fs.unlinkSync(itemPath);
        }else if(stat.isDirectory()){
            delDir();
        }
    }
}

delDir('./img');