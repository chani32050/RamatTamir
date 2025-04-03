const ApartmentModules = require("../Modules/ApartmentModule");

async function getAll(req, res) {
    let arrA = await ApartmentModules.find();
    res.status(200).send(arrA);
}

async function getById(req, res) {
    let a = await ApartmentModules.findById(req.params.id);
    res.status(200).send(a);
}

async function create(req, res) {
    let a = new ApartmentModules(req.body);
    await a.save();
    res.status(200).send(a);
}

async function deleteById(req, res) {
    let a = await ApartmentModules.findByIdAndDelete(req.params.id);
    res.status(200).send(a);
}

async function update(req, res) {
    let a = await ApartmentModules.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(a);
}

module.exports = { getAll, getById, create, deleteById, update };
