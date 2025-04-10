const fs = require("fs");

setImmediate(() => {
  console.log("Set Immediate");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);

Promise.resolve(() => {
  console.log("Promise");
}).then(() => {
  console.log("Promise Resolved");
});

fs.readFile("note.txt", "utf8", () => {
  console.log("File Reading complete");
});

process.nextTick(() => {
  process.nextTick(() => console.log("Inner nextTick"));
  console.log("Process.NextTick");
});

console.log("Last Line");

/*
◽output: 

Last Line
Process.NextTick
Inner nextTick
Promise Resolved
Timer Expired
Set Immediate
File Reading complete

*/
