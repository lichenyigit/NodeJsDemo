import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename)//当前正在执行的脚本的文件名称
console.log(__dirname)//当前正在执行的脚本文件的目录

const strPath = './a/b/1.js';

//获取扩展名
console.log(path.extname(strPath))

//获取文件名称
console.log(path.basename(strPath))

//获取目录
console.log(path.dirname(strPath))

//路径解析和规范化
console.log(path.normalize(strPath))

//路径合并
console.log(path.join(__dirname, '/abc.png'))

//获取绝对路径
console.log(path.resolve(strPath))