const fs = require("fs");

const https = require("https");

console.log("Node starting async opearation");

var a = 25500545;

var b = 55;

https.get("https://api.github.com/users/harshmehra", function (res, rej) {
  console.log("Fetched data successfully");
});

setTimeout(() => {
  console.log("SetTimeout called after 5 seconds");
}, 5000);

fs.readFile("./note.txt", "utf-8", (err, data) => {
  console.log("File data: ", data);
});

function multiplyFn(x, y) {
  const val = a * b;
  console.log(val);
  return val;
}

var c = multiplyFn(a, b);

console.log("Value of c is: ", c);

/*
◽output ⇨

Node starting async opearation
1402529975
Value of c is:  1402529975
File data:  userName : "Harsh",
address : Siddharth Nagar
city : "Jaipur"
country : India
Fetched data successfully
SetTimeout called after 5 seconds

*/
