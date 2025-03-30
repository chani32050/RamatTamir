const express = require("express")
const router = express.Router()
const {getAll,getById,create,deleteById,update} = require("../Controllers/ActivityController")

router.post("/create",create)
router.get("/getAll",getAll)
router.get("/getById/:id",getById)
router.delete("/deleteById/:id",deleteById)
router.put("/update",update)

module.exports = router


