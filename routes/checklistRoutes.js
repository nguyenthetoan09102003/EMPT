const express = require("express");
const router = express.Router();
const checklistController = require("../controllers/checklistController");


router.get("/", checklistController.showForm);


router.post("/submit", checklistController.saveData);

module.exports = router;
