const router = require("express").Router();
const user = require("../controllers/usersController.js");

// all
router.get("/", (req, res) => user.getAll(req, res));

//get
router.get("/:id", (req, res) => user.get(req, res));

// create
router.post("/", (req, res) => user.create(req, res));

// update
router.patch("/:id", (req, res) => user.update(res, res));

// delete
router.delete("/:id", (req, res) => user.destroy(req, res));

module.exports = router;
