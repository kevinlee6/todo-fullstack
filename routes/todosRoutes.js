const router = require("express").Router();
const todo = require("../controllers/todosController");

// all
router.get("/", (req, res) => todo.getAll(req, res));

//get
router.get("/:id", (req, res) => todo.get(req, res));

// create
router.post("/", (req, res) => todo.create(req, res));

// update
router.patch("/:id", (req, res) => todo.update(req, res));

// delete
router.delete("/:id", (req, res) => todo.destroy(req, res));

module.exports = router;
