const crypto = require("crypto");

console.log("Learning blocking main thread");

let a = 20;

let b = 30;

//◽ This is synchronous function which is blocking the main thread, once this function will execute then only the code will move to next line
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

console.log("First key generated");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second key generated");
});

function multiply(x, y) {
  const val = a * b;
  console.log(val);
  return val;
}

let c = multiply(a, b);

console.log("the value of c is: ", c);

/*
◽output ⇨
Learning blocking main thread
First key generated
600
the value of c is:  600
Second key generated

💥 Best practice is never use synchronous functions.
*/
