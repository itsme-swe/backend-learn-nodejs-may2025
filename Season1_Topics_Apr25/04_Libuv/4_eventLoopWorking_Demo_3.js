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
  console.log("Promise resolved");
});

fs.readFile("note.txt", "utf8", () => {
  setTimeout(() => {
    console.log("Second Timeout");
  }, 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File reading CB");
});

process.nextTick(() => console.log("NextTick"));

console.log("Last Line of code");

/*
◽output:

Last Line of code
NextTick
Promise resolved
Timer Expired
Set Immediate
File reading CB
2nd nextTick
2nd setImmediate
Second Timeout

*/
