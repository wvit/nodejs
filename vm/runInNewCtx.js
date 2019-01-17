const vm = require('vm');

const sandbox = {};
const code =
    `
 var x = 40;
 var y = 17;
 var obj={
     x:2333
 };

 function test(){
    return '你好'
 }
 `;

vm.runInNewContext(code, sandbox);

console.log(sandbox);