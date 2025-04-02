const mongoose = require("mongoose")
const ManagerModule=mongoose.Schema({
    Id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true  }, // מזהה ייחודי חובה
    QueueElderlyToSignIn: { 
        type: [{type:mongoose.Schema.Types.ObjectId, ref:"ElderlySignInModule"}],
        default: []
    } 
})
module.exports = mongoose.model("ManagerModule",ManagerModule)