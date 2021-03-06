const express = require('express');
const router = express.Router();

const { getProfile, editProfile, editPassword } = require('../controllers/profile');

router.get('/', getProfile);
router.put('/editprof', editProfile);
router.put('/editpass', editPassword);

module.exports = router;