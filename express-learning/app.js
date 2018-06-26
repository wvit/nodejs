const express = require('express');
//启动express
const app = express();

app.get('/', (req, res) => {
    //响应发送内容
    res.type('html'); //设置内容类型
    res.send('<h2>hello express</h2>');
});

app.post('/', function(req, res) {
    res.send('this method is POST');
    console.log('this method is POST');
});

//监听端口
const server = app.listen(1999, () => {
    const serverInfo = server.address();
    console.log(serverInfo);
});