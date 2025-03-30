const express =require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")


app.use(bodyParser.json())


const ActivityRouter= require("./Routers/ActivityRouter")
const ApartmentRouter= require("./Routers/ApartmentRouter")
const ApartmentCleanRouter= require("./Routers/ApartmentCleanRouter")
const CleanerRouter= require("./Routers/CleanerRouter")
const ElderlyRouter= require("./Routers/ElderlyRouter")
const ElderlySignInRouter= require("./Routers/ElderlySignInRouter")
const ManagerRouter= require("./Routers/ManagerRouter")

require('dotenv').config();
const dbPass = process.env.DB_PASS;

// mongoose.connect(dbPass)
// .then(() => console.log("Connected…")).catch(err => console.log(err))

app.use("/Activity", ActivityRouter)
app.use("/Apartment", ApartmentRouter)
app.use("/ApartmentClean", ApartmentCleanRouter)
app.use("/Cleaner", CleanerRouter)
app.use("/Elderly", ElderlyRouter)
app.use("/ElderlySignIn", ElderlySignInRouter)
app.use("/Manager", ManagerRouter)


app.listen(8080, ()=>{
    console.log("run...");    
    
})