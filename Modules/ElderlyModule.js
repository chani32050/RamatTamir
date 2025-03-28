const mongoose = require("mongoose")

const ElderlyModule=mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    Email: { type: String, required: true, unique: true, lowercase: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, // אימייל תקין וייחודי
    RelativeEmail: { type: String, required: true, lowercase: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, // אימייל קרוב משפחה תקין
    Gender: { type: String, required: true, enum: ['Male', 'Female'] }, // מגדר מוגבל לערכים מסוימים
    PersonalStatus: { type: String, required: true, enum: ['Single', 'Married', 'Divorced', 'Widowed'] }, // מצב משפחתי מוגבל
    Age: { type: Number, required: true, min: 60, max: 120 }, // גיל חייב להיות בטווח סביר
    Phone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון חייב להיות 9 או 10 ספרות
    RelativePhone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון קרוב משפחה באותו פורמט
    MedicalBag: { type: Number, required: true, min: 1 }, // חייב להיות מספר חיובי
    ApartmentNumber: { type: Number, required: true, min: 1 }, // חייב להיות מספר חיובי
    ActivitiesList: { type: [Number], default: [] }, // רשימה של מזהים של פעילויות
    HasPhilipin: { type: Boolean, required: true } // האם יש מטפל פיליפיני חובה
})
module.exports = mongoose.model("ElderlyModule",ElderlyModule)