const express = require("express")
const router = express.Router()
const {getAll,getById,create,deleteById,update,getByIdWithParticipantsList,getAllWithParticipantsList} = require("../Controllers/ActivityController")

router.post("/create",create)
router.get("/getAll",getAll)
router.get("/getById/:id",getById)
router.delete("/deleteById/:id",deleteById)
router.put("/update/:id",update)
router.get("/getByIdWithParticipantsList/:id",getByIdWithParticipantsList)
router.get("/getAllWithParticipantsList",getAllWithParticipantsList)
module.exports = router


