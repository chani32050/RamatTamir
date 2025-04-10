const UserModule = require("../Modules/UserModule");

async function getAll(req, res) {
    let arrM = await UserModule.find();
    res.status(200).send(arrM);
}

async function getById(req, res) {
    let m = await UserModule.findById(req.params.id);
    res.status(200).send(m);
}

async function create(req, res) {
    let m = await new UserModule(req.body);
    await m.save();
    console.log(req.body);
    
    res.status(200).send(m);
}

async function deleteById(req, res) {
    let m = await UserModule.findByIdAndDelete(req.params.id);
    res.status(200).send(m);
}

async function update(req, res) {
    let m = await UserModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(m);
}

module.exports = { getAll, getById, create, deleteById, update };
