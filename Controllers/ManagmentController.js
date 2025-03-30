const ManagementModule=require("../Modules/ManagementModule")
   
// async function furnituresByCategortId(req,res) {
//     const categoryWithFurniture = await categoryModule.findById(req.params.id)
//     .populate('arrFurniturs'); // זה יחליף את ה-IDs במידע המלא על הרהיטים
//     res.send(categoryWithFurniture)

// }

async function getAll(req,res){
    let arrM=await ManagementModule.find()
    res.send(arrM).status(200)
}

async function getById(req,res) {
    let m=await ManagementModule.findById(req.params.id)
    res.send(m).status(200)
}

async function create(req,res) {
    let m=await new ManagementModule(req.body)
    await m.save()
    res.send(m).status(200)
}

async function deleteById(req,res){
    let m=await ManagementModule.findByIdAndDelete(req.params.id)
    res.send(m).status(200)
}

async function update(req,res) {
    let m=await ManagementModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(m).status(200)
}
Module.exports={ getAll,getById,create,deleteById,update} 