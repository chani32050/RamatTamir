const ActivityModule=require("../Modules/ActivityModule")

async function getAll(req,res){
    let arrA=await ActivityModule.find()
    res.send(arrA).status(200)
}

async function getById(req,res) {
    let ca=await ActivityModule.findById(req.params.id)
    res.send(a).status(200)
}

async function create(req,res) {
    let a=await new ActivityModule(req.body)
    await a.save()
    res.send(a).status(200)
}

async function deleteById(req,res){
    let a=await ActivityModule.findByIdAndDelete(req.params.id)
    res.send(a).status(200)
}

async function update(req,res) {
    let a=await ActivityModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(a).status(200)
}
module.exports={ getAll,getById,create,deleteById,update} 