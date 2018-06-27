const express = require('express');
//启动express
const app = express();

//设置静态资源托管
app.use(express.static('static'));


app.use((req, res, next) => {
    console.log('hello express');
    next();
})

app.get('/', (req, res) => {
    //响应发送内容
    //设置内容类型
    res.type('html');
    //获取静态资源

    res.send(`<img src='img/girl.jpg'/>`);
    console.log('this method is GET');
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