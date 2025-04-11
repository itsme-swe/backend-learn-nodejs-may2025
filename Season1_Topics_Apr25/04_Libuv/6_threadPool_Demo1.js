const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2; //◽ this is how we can resize the size of thread pool

crypto.pbkdf2("pass", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKF2 done");
});
crypto.pbkdf2("pass", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKF2 done");
});
crypto.pbkdf2("pass", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKF2 done");
});
crypto.pbkdf2("pass", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKF2 done");
});
crypto.pbkdf2("pass", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKF2 done");
});

/*
If we run this code the 4 threads will print together but the 5th thread will wait to execute firstto the four threads and then it will execute because thread pool is having 4 threads by default. 
*/
