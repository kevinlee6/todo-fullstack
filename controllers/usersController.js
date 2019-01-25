const router = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const { validateRegister } = require('../helper.js');

// all
router.get('/', async (req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json({ users });
  } catch (e) {
    return res.status(500).json({ message: 'Unable to get all users.' });
  }
});

//get
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.get(parseInt(id));
    return res.status(200).send({ user });
  } catch (e) {
    return res
      .status(500)
      .json({ message: 'Could not find user with that id.' });
  }
});

// create
router.post('/', async (req, res) => {
  try {
    if (validateRegister(req.query)) {
      const { email, password } = req.query;
      const user = await User.create({ email, password });
      res.json({ user });
    } else {
      throw Error('Account creation failed.');
    }
  } catch (e) {
    return res.status(500).json({ message: e });
  }
});

// update
router.patch('/:id', async (req, res) => {
  try {
    const { id, password, newPassword } = req.params;
    const user = await User.get(parseInt(id));
    const isSameHash = await bcrypt.compare(password, user.password);
    if (isSameHash) {
      await User.update({
        id: parseInt(id),
        password: newPassword,
      });
      return res.status(200).json({ message: 'Password update successful.' });
    } else {
      throw Error('Original password does not match current password.');
    }
  } catch (e) {
    return res.status(500).json({ message: e });
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
