# Node.js Notes

## Under the hood: How require( ) functions work

    (function (exports, require, module, __filename, __dirname) {

            // Your module code here
    });

When we use require() in Node.js, the module's code is internally wrapped and executed in a function similar to an IIFE. This wrapper function provides scope isolation and injects special variables like **module**, **exports**, **require**, **\_\_dirname**, and **\_\_filename**.
