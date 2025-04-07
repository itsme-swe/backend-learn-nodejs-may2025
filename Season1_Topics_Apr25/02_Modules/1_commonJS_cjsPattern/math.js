function add(a, b) {
  return a + b;
}

const msg = "Hello World";

console.log(module.exports);  //◽ {}

module.exports = { msg, add };

console.log(module.exports);  //◽ { msg: 'Hello World', add: [Function: add] }

//◽ Exporting "add()" function and "msg" variable by using commonJs feature "module.exports"
