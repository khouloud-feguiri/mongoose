//Require mongoose
const mongoose = require("mongoose");
//Create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required : true
  },
  lastName: { 
    type : String ,
    required : true
  },
  email: {
    type : String ,
    unique : true
  },
  password: {
    type : String,
    required : true
},
});
//export
module.exports = User = mongoose.model("user", userSchema);