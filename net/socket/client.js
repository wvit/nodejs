const net = require('net');
const PORT = 3000;
const HOST = '127.0.0.1';

//net.createConnection()是net.connect()别名
const client = net.connect(PORT, HOST);

client.on('connect', () => {
    console.log('客户端：已经与服务端建立连接');
});
client.on('data', data => {
    console.log('客户端：收到服务端数据，内容为{' + data + '}');
});
client.on('close', data => {
    console.log(`客户端：连接断开${data}`);
});

client.write('你好，我是客户端');