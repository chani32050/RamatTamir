const mongoose = require("mongoose")
const {Gender,PersonalStatus}=require("../Constants/enums")
const ElderlyModule=mongoose.Schema({
    // Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Gender: { type: String, enum: Object.values(Gender), required: true }, // מגדר מוגבל לערכים מסוימים
    PersonalStatus: {type: String, enum: Object.values(PersonalStatus), default: PersonalStatus.SINGLE }, // מצב משפחתי מוגבל
    DateOfBirth: { type: Date, required: true }, // תאריך לידה חובה
    // Age: { type: Number, required: true, min: 60, max: 120 }, // גיל חייב להיות בטווח סביר
    RelativePhone: { type: String, required: true }, // טלפון קרוב משפחה באותו פורמט
    MedicalBag: { type: Number, required: true, min: 1 , match: [/^\S+@\S+\.\S+$/, "Invalid email format"] }, // חייב להיות מספר חיובי
    ApartmentId: { type: mongoose.Schema.Types.ObjectId,ref:'ApartmentModule', default: null}, // חייב להיות מספר חיובי
    ActivitiesList: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ActivityModule" }], default: [] },
    HasPhilipin: { type: Boolean, required: true }, // האם יש מטפל פיליפיני חובה
})
module.exports = mongoose.model("ElderlyModule",ElderlyModule)