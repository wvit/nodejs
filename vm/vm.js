const vm = require('vm');

const x = 1;

const sandbox = {
    x: 2
};
vm.createContext(sandbox);

const code = `x += 40; var y = 17;function test(){
    return '你好'
}`;

vm.runInContext(code, sandbox);

console.log(sandbox.x);
console.log(sandbox.y);
console.log(sandbox.test());