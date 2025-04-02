const express = require("express")
const router = express.Router()
const {getAll,getById,create,deleteById,update,getByIdWithQueueElderlyToSignIn} = require("../Controllers/ManagmerController")

router.post("/create",create)
router.get("/getAll",getAll)
router.get("/getById/:id",getById)
router.delete("/deleteById/:id",deleteById)
router.put("/update/:id",update)
router.get("/getByIdWithQueueElderlyToSignIn/:id",getByIdWithQueueElderlyToSignIn)
module.exports = router


