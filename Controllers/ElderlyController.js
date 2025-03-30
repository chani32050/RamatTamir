const ElderlyModule=require("../Modules/ElderlyModule")
   


async function getAll(req,res){
    let arrE=await ElderlyModule.find()
    res.send(arrE).status(200)
}

async function getById(req,res) {
    let e=await ElderlyModule.findById(req.params.id)
    res.send(e).status(200)
}

async function create(req,res) {
    let e=await new ElderlyModule(req.body)
    await e.save()
    res.send(e).status(200)
}

async function deleteById(req,res){
    let e=await ElderlyModule.findByIdAndDelete(req.params.id)
    res.send(e).status(200)
}

async function update(req,res) {
    let e=await ElderlyModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(e).status(200)
}
module.exports={ getAll,getById,create,deleteById,update} 