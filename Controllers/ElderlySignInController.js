const ElderlySignInModule = require("../Modules/ElderlySignInModule");

async function getAll(req, res) {
    let arrE = await ElderlySignInModule.find();
    res.status(200).send(arrE);
}

async function getById(req, res) {
    let e = await ElderlySignInModule.findById(req.params.id);
    res.status(200).send(e);
}

async function create(req, res) {
    let e = new ElderlySignInModule(req.body);
    await e.save();
    res.status(200).send(e);
}

async function deleteById(req, res) {
    let e = await ElderlySignInModule.findByIdAndDelete(req.params.id);
    res.status(200).send(e);
}

async function update(req, res) {
    let e = await ElderlySignInModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(e);
}

module.exports = { getAll, getById, create, deleteById, update };
