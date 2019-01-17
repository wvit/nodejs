const vm = require('vm');

const sandbox = {
    x: 40,
    y: 17,
    obj: {
        x: 2333
    },
    test(msg) {
        return msg
    }
}

vm.createContext(sandbox);
vm.runInContext(`x += 5`, sandbox);

console.log(vm.isContext(sandbox))
console.log(sandbox);
console.log(sandbox.test('你好'));