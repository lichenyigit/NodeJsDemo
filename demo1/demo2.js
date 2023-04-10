const express= require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("this is demo2.js");
});
app.listen(3333, () => {
    console.log('服务器已经启动 ', 'http://localhost:3333');
});