const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/profile');
const User = require('../../models/user');
const {check ,validationResult } = require('express-validator/check');

//@route    GET api/profile
//@desc     Get Current User profile
//@access   Private

router.get('/', auth , async (req,res) => {
    try{
        const profile = await Profile.findOne({user : req.user.id}).populate('user',
        ['name','rationCardNo','address','noOfPeople']);

        if(!profile){
            return res.status(400).json({msg:"No profile avilable.."});
        }

        res.json(profile);
    }catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }


});

//@route    POST api/profile
//@desc     Create and Update User profile
//@access   Private



module.exports = router;