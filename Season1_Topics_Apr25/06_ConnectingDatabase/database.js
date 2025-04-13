/*
💥 This is how we connect monogoDB to our server. We need to create URI and assigning connection string of mongodb to URI variable.
*/

const { MongoClient } = require("mongodb"); //◽ This is how we connect node app with mongodb

const url =
  "mongodb+srv://meharsh05:dollarkamao@harsh.rxfdaal.mongodb.net/?retryWrites=true&w=majority&appName=Harsh";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Using connect method to connect to the server
  await client.connect();
  console.log("Connected to the server successfully");

  const db = client.db(dbName); // ◽ Here we are referencing to the database

  const collection = db.collection("User"); //◽ And here we are attaching our database to the collection

  //◽ Finding documents from database
  const findResult = await collection.find({}).toArray();

  console.log("Documents found: ", findResult);

  const data = {
    firstName: "Mukul",
    lastName: "Pratap",
    city: "Delhi",
  };

  //◽ Now inserting new user into database
  const insertResult = await collection.insertMany([data]);

  console.log("Inserted documents:", insertResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.log)
  .finally(() => client.close());
