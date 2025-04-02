const mongoose = require("mongoose");
const {Roles} = require("../Constants/enums"); 


const userModule = new mongoose.Schema({
  Id: { type: Number, required: true, unique: true }, 
  Phone: { type: String, required: true, match: [/^\d{10}$/, "Invalid phone number format"] },
  Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, 
  Email: {type: String,required: true,unique: true,lowercase: true, match: [/^\S+@\S+\.\S+$/, "Invalid email format"] }, 
  Password: { type: String, required: true, minlength: 6, },
  Role: { type: String, enum: Object.values(Roles), required: true }, 
  CreatedAt: { type: Date, default: Date.now,}
});

module.exports = mongoose.model("User", userModule);