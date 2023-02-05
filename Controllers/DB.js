const user = require("../Modals/Documents");

// Create Many Records with model.create()

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
