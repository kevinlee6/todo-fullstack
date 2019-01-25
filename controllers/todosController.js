const router = require('express').Router();
const Todo = require('../models/todo');

// all
router.get('/', async (req, res) => {
  try {
    const { user_id } = req.query;
    const todos = await Todo.getAll(parseInt(user_id));
    return res.status(200).json({ todos });
  } catch (e) {
    return res.status(500).json({ message: 'Unable to get all todos.' });
  }
});

//get
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.get(parseInt(id));
    return res.status(200).json({ todo });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Could not find todo that with id.' });
  }
});

// create
router.post('/', async (req, res) => {
  try {
    const { user_id, content } = req.query;
    const todo = await Todo.create({ user_id: parseInt(user_id), content });
    res.status(200).json({ todo });
  } catch (e) {
    return res.status(500).json({ message: 'Todo creation failed.' });
  }
});

// update
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { content, completed } = req.query;
    if (content) {
      const todo = await Todo.update({ id: parseInt(id), content });
      return res.status(200).json({ message: 'Todo content updated.' });
    }
    if (completed) {
      const todo = await Todo.update({
        id: parseInt(id),
        completed: completed.toLowerCase() === 'true',
      });
      return res.status(200).json({ message: 'Toggled todo.' });
    }
    throw Error();
  } catch (e) {
    return res.status(500).json({ message: 'Could not update todo.' });
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const destroy = await Todo.destroy(parseInt(id));
    return res.status(200).json(destroy);
  } catch (e) {
    return res.status(500).json({ message: 'Todo could not be deleted.' });
  }
});

module.exports = router;
