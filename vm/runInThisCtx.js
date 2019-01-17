const vm = require('vm');
global.a = 0;
const code = `
((require,msg) => {
  const http = require('http');

  http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\\n');
  }).listen(8124);
  a=3
  console.log(msg)
  console.log('Server running at http://127.0.0.1:8124/');
})`;

vm.runInThisContext(code)(require, 'hello vm');
console.log(a)