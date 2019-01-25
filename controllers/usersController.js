const router = require('express').Router();
const User = require('../models/user.js');

// all
router.get('/', async (req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json({ users });
  } catch (e) {
    return res.status(500).json(e);
  }
});

//get
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.get(parseInt(id));
    return res.status(200).send({ user });
  } catch (e) {
    return res.status(500).json(e);
  }
});

// create
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await User.create({ email, password });
    res.json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// update
router.patch('/:id', async (req, res) => {
  try {
    const { id, password } = req.params;
    const user = User.update({ id: parseInt(id), password });
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const destroy = await User.destroy(parseInt(id));
    return res.status(200).json(destroy);
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;
