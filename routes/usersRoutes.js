const router = require("express").Router();
const User = require("../controllers/usersController.js");

// all
router.get("/", (req, res) => User.getAll(req, res));

//get
router.get("/:id", (req, res) => User.get(req, res));

// create
router.post("/", (req, res) => User.create(req, res));

// update
router.patch("/:id", (req, res) => User.update(res, res));

// delete
router.delete("/:id", (req, res) => User.destroy(req, res));

module.exports = router;
