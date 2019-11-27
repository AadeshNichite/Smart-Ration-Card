const jwt = require ('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){

    //Get token from header
    const token = req.header('x-auth-token');

    //check token present or not
    if(!token){
        return res.status(401).json({msg:"No token"})
    }

    //verify token 
    try{
        const decoded = jwt.verify(token,config.get('jwtsecret'))
        req.user = decoded.user;
        next();
    } catch(err) {
        return res.status(401).json({msg:"Token is not valid"})
    }

}