const fs = require("fs");

const a = 10;

setImmediate(() => {
  console.log("Set Immediate");
});

fs.readFile("./note.txt", "utf-8", () => {
  console.log("File reading Complete");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

function printA() {
  console.log("a =", a);
}

printA();

console.log("Last line of the file");

/*
◽output :

a = 10
Last line of the file
Timer Expired
Set Immediate
File reading Complete

*/
