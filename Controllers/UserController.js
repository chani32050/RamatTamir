const UserModule=require("../Modules/UserModule")

async function getAll(req,res){
    let arrM=await UserModule.find()
    res.send(arrM).status(200)
}

async function getById(req,res) {
    let m=await UserModule.findById(req.params.id)
    res.send(m).status(200)
}

async function create(req,res) {
    let m=await new UserModule(req.body)
    await m.save()
    console.log(req.body)
    res.send(m).status(200)
}

async function deleteById(req,res){
    let m=await UserModule.findByIdAndDelete(req.params.id)
    res.send(m).status(200)
}

async function update(req,res) {
    let m=await UserModule.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(m).status(200)
}

module.exports={ getAll,getById,create,deleteById,update } 