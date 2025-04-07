const { calSum, calMultiplication } = require("./calculate");

const data = require("./data.json"); // importing json file

let a = 10;

let b = 20;

calMultiplication(a, b); //◽ 200

calSum(a, b); //◽ 30

console.log(JSON.stringify(data)); //◽ {"name":"Harsh","city":"jaipur","country":"India"}
