const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();

mongoose.connect(process.env.MONGO_URL, (err) =>
  err ? console.log(err) : console.log("The DB is connected")
);

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
