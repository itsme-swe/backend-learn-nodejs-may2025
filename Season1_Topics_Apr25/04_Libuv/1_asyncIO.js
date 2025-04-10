const fs = require("fs");

const https = require("https");

console.log("Node starting async opearation");

var a = 100;

var b = 50;

https.get("https://api.github.com/users/harshmehra", function (res, rej) {
  console.log(res?.secret);
});

setTimeout(() => {
  console.log("SetTimeout called after 5 seconds");
}, 5000);

fs.readFile("./note.txt", "utf-8", (err, data) => {
  console.log("File data: ", data);
});

function multiplyFn(x, y) {
  const val = x * y;
  console.log(val);
  return val;
}

var c = multiplyFn(a, b);

console.log("Value of c is: ", c);
