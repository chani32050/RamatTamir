const ElderlyModule = require("../Modules/ElderlyModule");

async function getAll(req, res) {
    let arrE = await ElderlyModule.find();
    res.status(200).send(arrE);
}

async function getById(req, res) {
    let e = await ElderlyModule.findById(req.params.id);
    res.status(200).send(e);
}

async function create(req, res) {
    let e = new ElderlyModule(req.body);
    await e.save();
    res.status(200).send(e);
}

async function deleteById(req, res) {
    let e = await ElderlyModule.findByIdAndDelete(req.params.id);
    res.status(200).send(e);
}

async function update(req, res) {
    let e = await ElderlyModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(e);
}

async function getAllElderlyWithApartments(req, res) {
    let arr = await ElderlyModule.find().populate("ApartmentNumber");
    res.status(200).send(arr);
}

async function getByIdWithApartment(req, res) {
    let e = await ElderlyModule.findById(req.params.id).populate("ApartmentNumber");
    res.status(200).send(e);
}

async function getAllElderlyWithActivities(req, res) {
    let arr = await ElderlyModule.find().populate("ActivitiesList");
    res.status(200).send(arr);
}

async function getByIdWithActivities(req, res) {
    let e = await ElderlyModule.findById(req.params.id).populate("ActivitiesList");
    res.status(200).send(e);
}

async function getByIdWithApartmentAndActivity(req, res) {
    let e = await ElderlyModule.findById(req.params.id)
        .populate("ActivitiesList")
        .populate("ApartmentNumber");
    res.status(200).send(e);
}

async function getAllWithApartmentAndActivity(req, res) {
    let arr = await ElderlyModule.find()
        .populate("ActivitiesList")
        .populate("ApartmentNumber");
    res.status(200).send(arr);
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update,
    getAllElderlyWithApartments,
    getByIdWithApartment,
    getAllElderlyWithActivities,
    getByIdWithActivities,
    getByIdWithApartmentAndActivity,
    getAllWithApartmentAndActivity
};
