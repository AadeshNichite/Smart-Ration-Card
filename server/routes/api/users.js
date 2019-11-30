const express = require('express');
const router = express.Router();
const {check ,validationResult } = require('express-validator');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const config =require('config');
const User = require('../../models/user')

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post(
    '/', 
    [
    check('rationCardNo','Please Enter a valid ration card number').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('noOfPeople','Please Enter a valid number').not().isEmpty(),
    check('address','Please Enter a valid address').not().isEmpty(),
    check('password','Please enter a password with min length 6 character').isLength({min: 6})
    ],
    async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }    

    const{rationCardNo, name, password, address, noOfPeople}=req.body;

    try{

    //see if user exists
    let user = await User.findOne({rationCardNo});

    if(user){
        return res.status(400).json({ errors : [{msg :'user already exist'}]})
    }

    user = new User({
        rationCardNo,
        name,
        noOfPeople,
        address,
        password
    })

    console.log("here")
    //Encrypt password

    const salt = await bcrypt.genSalt(10);

    user.password= await bcrypt.hash(password,salt);

    await user.save();
    
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