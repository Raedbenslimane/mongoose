const mongoose = require("mongoose");

// Create and Save a Record of a Model:

const UserSchema = new.mongoose.Schema({
    name: String,
    age: Number,
    id:Number,
    FavouriteFoods : ['']
    

}),

var user= mongoose.model('user', UserSchema)
module.exports= user
