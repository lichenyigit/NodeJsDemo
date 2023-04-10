 import childProcess from 'child_process';

for(let i = 0;i < 3;i++){
    let wordProcess = childProcess.spawn('node',['1.js', i]);
    wordProcess.stdout.on('data', (data)=>{
        console.log('data ' + data)
    });
    wordProcess.stderr.on('data', (data)=>{
        console.log('err ' + data)
    });
    wordProcess.on('close', (data)=>{
        console.log('此进程已经退出')
    });
}
