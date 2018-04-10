const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;


const UserSchema = new mongoose.Schema({
  email:{
    type : String,
    unique :true,
    required :true,
    lowercase : true
  },
  username:{
    type : String,
    unique:true,
    required:true,
    trim:true
  },
  password:{
    type : String,
    required:true
  }
});



const User = module.exports = mongoose.model('User',UserSchema);
