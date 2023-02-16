const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();

mongoose.connect(process.env.MONGO_URL, (err) =>
  err ? console.log(err) : console.log("The DB is connected")
);
const Person = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.json([{ name: "John", age: 37, FavoriteFoods: [{ pizza }] }]);
  } catch (error) {
    console.log(error);
  }
};
// Use model.find() to Search Your Database
const Find = user.find({ name: "Jhon" });
// Use model.findOne() to Return a Single Matching Document
const FindOne = use.findOne({ name: "Jhon" });
// Use model.findById()
const findById = use.findById(_id("1"));
// Perform Classic Updates
const Update = use.updateMany({}, { $push: { FavouriteFoods: ["spaghetti"] } });
// model.findOne AndUpdate()
const set = use.findOneAndUpdate({ name: "Jhon" }, { $set: { age: 20 } });
// model.findByIdAndRemove
const Remove = use.deleteOne({ _id: "1" });
// Delete Many Documents with model.remove()
const deletee = use.remove({ name: "Mary" });

module.exports = { Person, Find, FindOne, findById, set, Remove, deletee };

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
