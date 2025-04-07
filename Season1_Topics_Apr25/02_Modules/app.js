/*
💥 Generally "app.js" use to be the entry point in node application.
*/

const { add } = require("./math"); // ◽ require() is an function used to import one module into another

console.log(add(20, 20)); // 40
