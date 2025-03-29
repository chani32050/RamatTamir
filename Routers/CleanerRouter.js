const express = require("express")
const router = express.Router()
const { createCategory,getCategorys,furnituresByCategortId} = require("../Controllers/categotyController")

router.post("/createCategory",createCategory)
router.get("/getCategorys",getCategorys)
router.get("/furnituresByCategortId/:id",furnituresByCategortId)

module.exports = router


