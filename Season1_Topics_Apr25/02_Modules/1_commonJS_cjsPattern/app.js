/*
💥 Generally "app.js" use to be the entry point in node application.
*/

//◽ // Importing only the 'add' function from the 'math.js' module using object destructuring.

const { add } = require("./math"); // ◽ 'require()' is a CommonJS function used to import modules in Node.js

console.log(add(20, 20)); // 40
