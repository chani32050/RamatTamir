const ApartmentModules=require("../Modules/ApartmentModules")


async function getAll(req,res){
    let arrA=await ApartmentModules.find()
    res.send(arrA).status(200)
}

async function getById(req,res) {
    let a=await ApartmentModules.findById(req.params.id)
    res.send(a).status(200)
}

async function create(req,res) {
    let a=await new ApartmentModules(req.body)
    await a.save()
    res.send(a).status(200)
}

async function deleteById(req,res){
    let a=await ApartmentModules.findByIdAndDelete(req.params.id)
    res.send(a).status(200)
}

async function update(req,res) {
    let a=await ApartmentModules.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(a).status(200)
}
module.exports={ getAll,getById,create,deleteById,update} 