const express = require("express")
const router = express.Router()
const {getAll,getById,create,deleteById,update,getByIdWithCleaner,getAllWithCleaner} = require("../Controllers/AppartmentCleanController")

router.post("/create",create)
router.get("/getAll",getAll)
router.get("/getById/:id",getById)
router.delete("/deleteById/:id",deleteById)
router.put("/update/:id",update)
router.get("/getByIdWithCleaner/:id",getByIdWithCleaner)
router.get("/getAllWithCleaner",getAllWithCleaner)
module.exports = router


