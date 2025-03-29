const express =require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())


const OrderRouter= require("./Routers/OrderRouter")


app.use("/furniture", FurnitureRouter)


app.listen(8080, ()=>{
    console.log("run...");    
    
})