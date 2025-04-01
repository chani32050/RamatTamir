const express = require("express")
const router = express.Router()
const {getAll,getById,create,deleteById,update,getAllElderlyWithApartments,
    getByIdWithApartment,getAllElderlyWithActivities,getByIdWithActivities,
 getByIdWithApartmentAndActivity,getAllWithApartmentAndActivity} = require("../Controllers/ElderlyController")

router.post("/create",create)
router.get("/getAll",getAll)
router.get("/getById/:id",getById)
router.delete("/deleteById/:id",deleteById)
router.put("/update/:id",update)
router.get("/getAllElderlyWithApartments",getAllElderlyWithApartments)
router.get("/getAllElderlyWithActivities",getAllElderlyWithActivities)
router.get("/getByIdWithApartment/:id",getByIdWithApartment)
router.get("/getByIdWithActivities/:id",getByIdWithActivities)
router.get("/getByIdWithApartmentAndActivity/:id",getByIdWithApartmentAndActivity)
router.get("/getAllWithApartmentAndActivity",getAllWithApartmentAndActivity)

module.exports = router


