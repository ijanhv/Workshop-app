const express = require('express');
const router = express.Router();
const { createWorkshop, deleteWorkshop, getAllWorkshop, getWorkshop, updateWorkshop } = require("../controllers/WorkshopController");

//CREATE
router.post("/", createWorkshop);

//UPDATE
router.put("/:id", updateWorkshop)

//DELETE
router.delete("/:id", deleteWorkshop)

//GET
router.get("/:id", getWorkshop)

//GET ALL
router.get("/", getAllWorkshop)


module.exports = router;