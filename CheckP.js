const {
  Person,
  Find,
  FindOne,
  findById,
  set,
  Remove,
  deletee,
} = require("../Controllers/DB");

app.create("/", Person);
app.find("/", Find);
app.findOne("/", FindOne);
app.findById("/", findById);
app.findOneAndUpdate("/", set);
app.deleteOne("/", Remove);
app.remove("/", deletee);
