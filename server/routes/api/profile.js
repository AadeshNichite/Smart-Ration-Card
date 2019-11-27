const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/profile');
const User = require('../../models/user');
const {check ,validationResult } = require('express-validator');

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
router.post(
    '/',
    [
        auth,
        [
            check('rationCardNo','rationCardNo is required')
              .not()
              .isEmpty(),
               
        ]
    ],
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {
            Month,
            item,
            ammount,
            price
        } = req.body;

        //Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;

        //Build A rationistory Object
        profileFields.rationhistory={}
        if(Month) profileFields.rationhistory.Month = Month;

        //Build A history Object
        profileFields.rationhistory.history={}
        if(item) profileFields.rationhistory.history.item = item;
        if(ammount) profileFields.rationhistory.history.ammount= ammount;
        if(price) profileFields.rationhistory.history.price= price;

        try{
            let profile = await Profile.findOne({ user : req.user.id });
            if(profile){
                

                //update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set : profileFields },
                    { new: true }
                );

                return res.json(profile);
            }
            else{
            console.log(Month,item,ammount,price,req.user.id );
            //Create
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
            }

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }


        res.send("Hello");

    });
module.exports = router;