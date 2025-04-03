const ActivityModule = require("../Modules/ActivityModule");

async function getAll(req, res) {
    let arrA = await ActivityModule.find();
    res.status(200).send(arrA);
}

async function getById(req, res) {
    let ca = await ActivityModule.findById(req.params.id);
    res.status(200).send(ca);
}

async function create(req, res) {
    let a = await new ActivityModule(req.body);
    await a.save();
    res.status(200).send(a);
}

async function deleteById(req, res) {
    let a = await ActivityModule.findByIdAndDelete(req.params.id);
    res.status(200).send(a);
}

async function update(req, res) {
    let a = await ActivityModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(a);
}

async function getByIdWithParticipantsList(req, res) {
    let a = await ActivityModule.findById(req.params.id).populate('participantsList');
    res.status(200).send(a);
}

async function getAllWithParticipantsList(req, res) {
    let arrA = await ActivityModule.find().populate('participantsList');
    res.status(200).send(arrA);
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update,
    getByIdWithParticipantsList,
    getAllWithParticipantsList
};
