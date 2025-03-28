const mongoose = require("mongoose")
const CleanerModule=mongoose.Schema({
    
    Id:{ type: Number, required: true, unique: true }, // מזהה ייחודי חובה
	Name:{ type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    dayInWork: { 
        type: [String], // מערך של מחרוזות
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // רק ימים חוקיים
        required: true 
    }
})
module.exports = mongoose.model("CleanerModule",CleanerModule)