const express = require('express');
const router = express.Router();

//@route   GET api/post
//@desc     Add profile
//@access   Public

router.get('/',(req,res) => res.send('User Route'));

module.exports = router;