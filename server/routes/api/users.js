const express = require('express');
const router = express.Router();
const {check ,validationResult } = require('express-validator/check');
const bcrypt =require('bcryptjs');
const User = require('../../models/user')

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post(
    '/', 
    [
    check('name', 'Name is required').not().isEmpty(),
    check('rationCardNo','Please Enter a valid ration card number').not().isEmpty(),
    check('password','Please enter a password with min length 6 character').isLength({min: 6}),
    check('noOfPeople','Please Enter a valid number').not().isEmpty(),
    check('address','Please Enter a valid address').not().isEmpty()
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

    //Encrypt password

    const salt = await bcrypt.genSalt(10);

    user.password= await bcrypt.hash(password,salt);

    await user.save();
    
    //Return jsonwebtoken


    res.send('Usere Registered');

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router; 