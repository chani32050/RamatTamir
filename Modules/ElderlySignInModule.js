const mongoose = require("mongoose")

const ElderlySignInModule=mongoose.Schema({
    Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    Email: { type: String, required: true, unique: true, lowercase: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, // אימייל תקין וייחודי
    Age: { type: Number, required: true, min: 60, max: 120 }, // גיל חייב להיות בטווח סביר
    Phone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון חייב להיות 9 או 10 ספרות
    MedicalBag: { type: Number, required: true, min: 1 }, // חייב להיות מספר חיובי
    IsConfirm: { type: Boolean, required: true } //האם הזקן התקבל לדיור.
})
module.exports = mongoose.model("ElderlySignInModule",ElderlySignInModule)