const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("Set Immediate");
});

Promise.resolve((res, rej) => {
  console.log("Promise");
  res();
}).then(() => {
  console.log("Promise resolved");
});

fs.readFile("./note.txt", "utf-8", () => {
  console.log("File reading Complete");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick");
});

function printA() {
  console.log("a =", a);
}

printA();

console.log("Last line of the file");

/*
◽output :

a = 100
Last line of the file
process.nextTick
Promise resolved
Timer Expired
Set Immediate
File reading Complete

*/
