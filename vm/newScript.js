const vm = require('vm');

const script = new vm.Script(`
    function add(a, b) {
    return a + b;
    }

    console.log(add(1,2));
`);

script.runInThisContext();