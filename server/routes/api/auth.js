const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user')
const {check ,validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config =require('config');
const bcrypt =require('bcryptjs');


//@route    GET api/auth
//@desc     Add profile
//@access   Public

router.get('/',auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err){
        console.log(err.message);
        res.json(500).send("Server error");
    }

});

//@route    POST api/auth
//@desc     Authenticate user & get token
//@access   Public
router.post(
    '/', 
    [
    check('rationCardNo','Please Enter a valid ration card number').not().isEmpty(),
    check('password','Password is required').exists(),
    
    ],
    async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }    

    const{rationCardNo, password}=req.body;

    try{

    //see if user exists
    let user = await User.findOne({rationCardNo});

    if(!user){
        return res
        .status(400)
        .json({ errors : [{msg :'Invalid Credentials'}]})
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
        return res
        .status(400)
        .json({ errors : [{msg :'Invalid Credentials'}]})
    }
    //Return jsonwebtoken
        const payload ={
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtsecret'),
            {expiresIn: 3600},
            (err,token) =>{
                if(err) throw  err;
                res.json({token})
            } 
        )

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;