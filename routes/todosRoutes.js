const router = require("express").Router();
const Todo = require("../controllers/todosController");

// all
// router.get("/", (req, res) => Todo.getAll(req, res));
router.get("/", (req, res) => {
  console.log("hit");
  return Todo.getAll(req, res);
});

//get
router.get("/:id", (req, res) => Todo.get(req, res));

// create
router.post("/", (req, res) => Todo.create(req, res));

// update
router.patch("/:id", (req, res) => Todo.update(req, res));

// delete
router.delete("/:id", (req, res) => Todo.destroy(req, res));

module.exports = router;
