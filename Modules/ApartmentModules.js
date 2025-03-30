const mongoose = require("mongoose")
const ApartmentModule=mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    floor: { type: Number, required: true, min: -4 }, // מספר קומה (לא שלילי)
    numOfRooms: { type: Number, default: 1, min: 1, max: 5 }, // מספר חדרים (בין 1 ל-10)
    isView: { type: Boolean, default: false }, // האם יש נוף
    MonthlyPrice: { type: Number, required: true, min: 0 }, // מחיר חודשי (לא שלילי)
    SizeInSquareMeters: { type: Number, required: true, min: 10 } // גודל הדירה (לפחות 10 מ"ר)
})
module.exports = mongoose.model("ApartmentModule",ApartmentModule)