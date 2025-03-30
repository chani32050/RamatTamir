const ElderlySignInModule=require("../Modules/ElderlySignInModule")
   


async function getAll(req,res){
    let arrE=await ElderlySignInModule.find()
    res.send(arrE).status(200)
}

async function getById(req,res) {
    let e=await ElderlySignInModule.findById(req.params.id)
    res.send(e).status(200)
}

async function create(req,res) {
    let e=await new ElderlySignInModule(req.body)
    await e.save()
    res.send(e).status(200)
}

async function deleteById(req,res){
    let e=await ElderlySignInModule.findByIdAndDelete(req.params.id)
    res.send(e).status(200)
}

async function update(req,res) {
    let e=await ElderlySignInModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(e).status(200)
}
Module.exports={ getAll,getById,create,deleteById,update} 