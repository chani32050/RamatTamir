const { get } = require("mongoose")
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

async function getAllElderlyWithApartments(req,res) {
    let arr=await ElderlyModule.find().populate("ApartmentNumber")
    res.send(arr).status(200)
}
async function getByIdWithApartment(req,res) {
    let e=await ElderlyModule.findById(req.params.id).populate("ApartmentNumber")
    res.send(e).status(200)
}
async function getAllElderlyWithActivities(req,res) {
    let arr=await ElderlyModule.find().populate("ActivitiesList")
    res.send(arr).status(200)
}
async function getByIdWithActivities(req,res) {
    let e=await ElderlyModule.findById(req.params.id).populate("ActivitiesList")
    res.send(e).status(200)
}
async function getByIdWithApartmentAndActivity(req,res) {
    let e=await ElderlyModule.findById(req.params.id).populate("ActivitiesList").populate("ApartmentNumber")
    res.send(e).status(200)
}
async function getAllWithApartmentAndActivity(req,res) {
    let arr=await ElderlyModule.find().populate("ActivitiesList").populate("ApartmentNumber")
    res.send(arr).status(200)
}

module.exports={ getAll,getById,create,deleteById,update,getAllElderlyWithApartments,getByIdWithApartment,getAllElderlyWithActivities,getByIdWithActivities
,getByIdWithApartmentAndActivity,getAllWithApartmentAndActivity
} 