const mongoose = require("mongoose")
const {Gender,PersonalStatus}=require("../Constants/enums")
const ElderlyModule=mongoose.Schema({
    Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    Email: { type: String, required: true, unique: true, lowercase: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, // אימייל תקין וייחודי
     // אימייל קרוב משפחה תקין
    Gender: { type: String, enum: Object.values(Gender), required: true }, // מגדר מוגבל לערכים מסוימים
    PersonalStatus: {type: String, enum: Object.values(PersonalStatus), required: true }, // מצב משפחתי מוגבל
    Age: { type: Number, required: true, min: 60, max: 120 }, // גיל חייב להיות בטווח סביר
    Phone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון חייב להיות 9 או 10 ספרות
    RelativePhone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון קרוב משפחה באותו פורמט
    MedicalBag: { type: Number, required: true, min: 1 }, // חייב להיות מספר חיובי
    ApartmentNumber: { type: mongoose.Schema.Types.ObjectId,ref:'ApartmentModule', required: true}, // חייב להיות מספר חיובי
    ActivitiesList: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ActivityModule" }], default: [] },
    HasPhilipin: { type: Boolean, required: true } // האם יש מטפל פיליפיני חובה
})
module.exports = mongoose.model("ElderlyModule",ElderlyModule)