const mongoose = require("mongoose")
const {Gender,PersonalStatus}=require("../Constants/enums")
const ElderlyModule=mongoose.Schema({
    Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Gender: { type: String, enum: Object.values(Gender), required: true }, // מגדר מוגבל לערכים מסוימים
    PersonalStatus: {type: String, enum: Object.values(PersonalStatus), required: true }, // מצב משפחתי מוגבל
    Age: { type: Number, required: true, min: 60, max: 120 }, // גיל חייב להיות בטווח סביר
    RelativePhone: { type: String, required: true }, // טלפון קרוב משפחה באותו פורמט
    MedicalBag: { type: Number, required: true, min: 1 , match: [/^\S+@\S+\.\S+$/, "Invalid email format"] }, // חייב להיות מספר חיובי
    ApartmentNumber: { type: mongoose.Schema.Types.ObjectId,ref:'ApartmentModule', required: true}, // חייב להיות מספר חיובי
    ActivitiesList: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ActivityModule" }], default: [] },
    HasPhilipin: { type: Boolean, required: true } // האם יש מטפל פיליפיני חובה
})
module.exports = mongoose.model("ElderlyModule",ElderlyModule)