const mongoose = require("mongoose")
const ApartmentCleanModule=mongoose.Schema({
    AppartmentId: { type: Number, required: true }, // מזהה דירה חובה
    cleanerId: { type: Number, required: true }, // מזהה מנקה חובה
    Day: { 
        type: String, 
        required: true, 
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] // רק ימים חוקיים
    },
    StartTime: { type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ }, // שעה בפורמט HH:MM
    EndTime: { type: String, required: true, match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ }, // שעה בפורמט HH:MM
    Comments: { type: String, trim: true, maxlength: 300, default: "" } // הערות (עד 300 תווים, ברירת מחדל ריק)
});
module.exports = mongoose.model("ApartmentCleanModule",ApartmentCleanModule)