const net = require('net');
const PORT = 3000;
const HOST = '127.0.0.1';
let count = 0;
let msgCount = 0;


const server = net.createServer(socket => {
    console.log(`服务端：第${++count}个连接`);
    socket.on('data', data => {
        console.log('服务端：收到客户端数据，内容为{' + data + '}');
        socket.write(`服务端：收到第${++msgCount}条客户端数据`);
    });
    socket.on('close', () => {
        console.log(`服务端：客户端连接断开,还是剩${--count}个连接`);
    });
    socket.on('error', () => {});
});

server.listen(PORT, HOST, () => {
    console.log('服务端：开始监听来自客户端的请求');
});