 import childProcess from 'child_process';

for(let i = 0;i < 3;i++){
    let wordProcess = childProcess.exec('node 1.js ' + i, (error, stdout, stderr) => {
        if(error){
            console.log(stderr)
        }
        else{
            console.log("stdout ", stdout);
        }
    });
    wordProcess.addListener('exit', (code)=>{
        console.log(code, '进程已经退出')
    });
}
