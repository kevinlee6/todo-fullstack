const { Router } = require('express');
const router = Router();

// all
router.get('/');

//get
router.get('/:id');

// create
router.post('/');

// update
router.patch('/:id');

// delete
router.delete('/:id');

module.exports = router;
