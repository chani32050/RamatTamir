const CleanerModule = require("../Modules/CleanerModule");

async function getAll(req, res) {
    let arrC = await CleanerModule.find();
    res.status(200).send(arrC);
}

async function getById(req, res) {
    let c = await CleanerModule.findById(req.params.id);
    res.status(200).send(c);
}

async function create(req, res) {
    let c = new CleanerModule(req.body);
    await c.save();
    res.status(200).send(c);
}

async function deleteById(req, res) {
    let c = await CleanerModule.findByIdAndDelete(req.params.id);
    res.status(200).send(c);
}

async function update(req, res) {
    let c = await CleanerModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(c);
}

module.exports = { getAll, getById, create, deleteById, update };
