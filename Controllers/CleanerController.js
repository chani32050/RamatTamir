const CleanerModule=require("../Modules/CleanerModule")
   
async function furnituresByCategortId(req,res) {
    const categoryWithFurniture = await categoryModule.findById(req.params.id)
    .populate('arrFurniturs'); // זה יחליף את ה-IDs במידע המלא על הרהיטים
    res.send(categoryWithFurniture)

}

async function getAll(req,res){
    let arrC=await CleanerModule.find()
    res.send(arrC).status(200)
}

async function getById(req,res) {
    let c=await CleanerModule.findById(req.params.id)
    res.send(c).status(200)
}

async function create(req,res) {
    let c=await new CleanerModule(req.body)
    await c.save()
    res.send(c).status(200)
}

async function deleteById(req,res){
    let c=await CleanerModule.findByIdAndDelete(req.params.id)
    res.send(c).status(200)
}

async function update(req,res) {
    let c=await CleanerModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(c).status(200)
}