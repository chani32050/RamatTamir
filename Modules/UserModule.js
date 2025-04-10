const mongoose = require("mongoose");
const {Roles} = require("../Constants/enums"); 
const {UserStatus}=require("../Constants/enums")

const userModule = new mongoose.Schema({
  Id: { type: mongoose.Schema.Types.ObjectId,refPath:'Role', required: true, unique: true }, 
  Phone: { type: String, required: true, match: [/^\d{10}$/, "Invalid phone number format"] },
  FirstName: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, 
  LastName: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, 
  Email: {type: String,required: true,unique: true,lowercase: true, match: [/^\S+@\S+\.\S+$/, "Invalid email format"] }, 
  Password: { type: String, required: true, minlength: 6, },
  Role: { type: String, enum: Object.values(Roles), required: true }, 
  Status:{type: String, enum: Object.values(UserStatus), default: UserStatus.INACTIVE}, // סטטוס מוגבל לערכים מסוימים}
  CreatedAt: { type: Date, default: Date.now,},
});

module.exports = mongoose.model("User", userModule);