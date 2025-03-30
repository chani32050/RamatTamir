const mongoose = require("mongoose")
const {ActivityCategory} = require("../Constants/enums")
const ActivityModule=mongoose.Schema({
    Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 }, // שם האירוע
    Category: { 
        type: ActivityCategory, 
        required: true
    },
    Date: { type: Date, required: true }, // תאריך האירוע
    Location: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 }, // מיקום האירוע
    participantsList: { type: [Number], default: [] }, // רשימת משתתפים (שמות)
    MakerName: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם יוצר האירוע
    Price: { type: Number, default: 0, min: 0 }, // מחיר האירוע (לא יכול להיות שלילי)
    MaxParticipants: { type: Number, default: 50,min:50} // מספר מקסימלי של משתתפים
})
module.exports = mongoose.model("ActivityModule",ActivityModule)