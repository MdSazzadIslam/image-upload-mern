const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController");

debugger;
router.get("/", movieController.getAll);
router.post("/create", movieController.createMovie);

module.exports = router;
