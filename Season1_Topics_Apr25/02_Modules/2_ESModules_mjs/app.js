import { add } from "./math.js";

console.log(add(20, 30));

/*
💥 To enable ES Module we need to make some changes inside our 'package.json' file. In node by default 'cjs' is enabled to switch to 'mjs' we need to change:
    {
      "type" : "module"
    }
*/
