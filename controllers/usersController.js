const { Router } = require('express');
const router = Router();
const User = require('../models/user');

// all
// router.get('/', async (req, res) => {
//   const allUsers = await User.all();
//   try {
//     await res.json(allUsers);
//   } catch (e) {
//     res.send(e);
//   }
// });

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.all();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

//get
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.get(parseInt(id));
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// create
router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.query;
    const user = await User.create({ email, password });
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// update
router.patch('/:id', async (req, res, next) => {
  try {
    const { id, password } = req.params;
    return User.update({ id, password });
  } catch (e) {
    next(e);
  }
});

// delete
router.delete('/:id', async (req, res, next) => {
  try {
    const destroy = await User.destroy;
    res.json(destroy);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
