const mongoose = require("mongoose");
const config = require("./config");
const color = require("colors")

const dbURL = config.db.url;
console.log(dbURL)

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });