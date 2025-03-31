const mongoose = require("mongoose")
const ManagementModule=mongoose.Schema({
    Id: { type: Number, required: true, unique: true }, // מזהה ייחודי חובה
    Name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 }, // שם חובה, ללא רווחים מיותרים
    Email: { type: String, required: true, unique: true, lowercase: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, // אימייל תקין וייחודי
    Phone: { type: String, required: true, match: /^\d{9,10}$/ }, // טלפון חייב להיות 9 או 10 ספרות
    QueueElderlyToSignIn: { 
        type: [mongoose.Schema.Types.ObjectId], ref:'ElderlySignInModule',
        default: []
    } 
})
module.exports = mongoose.model("ManagementModule",ManagementModule)