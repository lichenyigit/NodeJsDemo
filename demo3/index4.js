let fs = require('fs');
fs.readFile('text3.txt', (err, data) => {
    if(!err){
        console.log(data.toString());
    }else{
        console.error(err);
    }
});