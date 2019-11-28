const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/profile');
const User = require('../../models/user');
const {check ,validationResult } = require('express-validator');

//@route    GET api/profile
//@desc     Get Current User profile using token 
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
            return res.status(400).json({errors:errors.array() })
        }
        const {
            user,
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

        // console.log(Month,item,ammount,price,req.user.id );

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
           
            // console.log(Month,item,ammount,price,req.user.id );
            //Create
            profile = new Profile(profileFields);
            await profile.save();
            return res.json(profile);

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });


//@route    GET api/profile/profile/:user_id
//@desc     Get  profile by user_id 
//@access   Public
router.get('/profile/:user_id',async (req,res) =>{
    try{
        const profile = await Profile.findOne({ user : req.params.user_id}).populate('User',
        ['rationhistory','name']);
        res.json(profile);

        if(!profile)
        return res.status(400).json({msg : 'Profile Not found'});

    }catch(err){
        console.error(err.message); 
        if(err.kind=='ObjectId'){
            return res.status(400).json({msg : 'Profile Not found'});
        }
        res.status(500).send('Server Error');
    }
});

//@route    PUT api/profile/rationInfo
//@desc     Add Ration Info month by Month 
//@access   Private
router.put(
    '/rationInfo',
    [
        auth, 
        [
            check('Month' ,'Month is required')
            .not()
            .isEmpty(),
            check('item' ,'item is required')
            .not()
            .isEmpty(),
            check('ammount' ,'ammount is required')
            .not()
            .isEmpty(),
            check('price' ,'price is required')
            .not()
            .isEmpty()

        ] 
    ],
async (req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() })
    }

    const {
        item,
        ammount,
        price,
        Month
     } = req.body;

    const newRationInfo = {};

    newRationInfo.history={};
    if(item) newRationInfo.history.item = item;
    if(ammount) newRationInfo.history.ammount= ammount;
    if(price) newRationInfo.history.price= price;

    if(Month) newRationInfo.Month = Month;

    let arr =[];

    try{

        const profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $push : { rationhistory : newRationInfo } }
        )

        await profile.save();

        res.json(profile); 

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;