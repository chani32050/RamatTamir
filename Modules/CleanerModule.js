const mongoose = require("mongoose")
const {DayInWeek} = require("../Constants/enums") // ייבוא של enum לימים בשבוע
const CleanerModule=mongoose.Schema({
    
    Id:{ type: Number, required: true, unique: true }, // מזהה ייחודי חובה
	Name:{ type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    dayInWork: { 
        type: [DayInWeek], // מערך של מחרוזות
        required: true 
    }
})
module.exports = mongoose.model("CleanerModule",CleanerModule)