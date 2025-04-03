const ManagerModule = require("../Modules/ManagerModule");

// The management is a singleton.
async function getAll(req, res) {
    let arrM = await ManagerModule.find();
    res.status(200).send(arrM);
}

async function getById(req, res) {
    let m = await ManagerModule.findById(req.params.id);
    res.status(200).send(m);
}

async function create(req, res) {
    let m = await new ManagerModule(req.body);
    await m.save();
    res.status(200).send(m);
}

async function deleteById(req, res) {
    let m = await ManagerModule.findByIdAndDelete(req.params.id);
    res.status(200).send(m);
}

async function update(req, res) {
    let m = await ManagerModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(m);
}

async function getByIdWithQueueElderlyToSignIn(req, res) {
    let m = await ManagerModule.findById(req.params.id).populate('QueueElderlyToSignIn');
    res.status(200).send(m);
}

module.exports = { getAll, getById, create, deleteById, update, getByIdWithQueueElderlyToSignIn };
