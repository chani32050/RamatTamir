const AppartmentCleanModule=require("../Modules/AppartmentCleanModule")

async function getAll(req,res){
    let arrA=await AppartmentCleanModule.find()
    res.send(arrA).status(200)
}

async function getById(req,res) {
    let a=await AppartmentCleanModule.findById(req.params.id)
    res.send(a).status(200)
}

async function create(req,res) {
    let a=await new AppartmentCleanModule(req.body)
    await a.save()
    res.send(a).status(200)
}

async function deleteById(req,res){
    let a=await AppartmentCleanModule.findByIdAndDelete(req.params.id)
    res.send(a).status(200)
}

async function update(req,res) {
    let a=await AppartmentCleanModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(a).status(200)
}
async function getByIdWithCleaner(req,res) {
    let a=await AppartmentCleanModule.findById(req.params.id).populate('cleanerId')
    res.send(a).status(200)  
}
async function getAllWithCleaner(req,res) {
    let a=await AppartmentCleanModule.find().populate('AppartmentId')
    res.send(a).status(200)  
}
module.exports={ getAll,getById,create,deleteById,update,getByIdWithCleaner,getAllWithCleaner } 