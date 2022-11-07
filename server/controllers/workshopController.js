const Workshop = require('../model/workshopModel')

const createWorkshop = async (req, res, next) => {
    const newWorkshop = new Workshop(req.body);
    try {
        const savedWorkshop = await newWorkshop.save();
        res.status(200).json(savedWorkshop)
    } catch (err) {
        next(err);
    }
}

const updateWorkshop = async (req, res, next) => {
    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedWorkshop)
    } catch (err) {
        next(err);
    }
}

const deleteWorkshop = async (req, res, next) => {
    try {
        await Workshop.findByIdAndDelete(req.params.id);
        res.status(200).json("Workshop has been deleted")
    } catch (err) {
        next(err);
    }
}

 const getWorkshop = async (req, res, next) => {
    try{
        const workshop = await Workshop.findById(req.params.id);
        res.status(200).json(workshop)
    } catch(err) {
        next(err);
    }
}

const getAllWorkshop = async (req, res, next) => {
    try {
        const Workshops = await Workshop.find();
        res.status(200).json(Workshops)
    } catch (err) {
        next(err)
    }
}

module.exports = { getAllWorkshop, getWorkshop, deleteWorkshop, updateWorkshop, createWorkshop }