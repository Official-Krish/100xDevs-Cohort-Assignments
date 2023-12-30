// Middleware for handling auth
const jwt = require('jsonwebtoken');
const {secret}  = require('../config');
const {Admin} = require('../db');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    try{
        const decodedValue = jwt.verify(jwtToken, secret);
        if(Admin.findOne({
            username: decodedValue.username,
        })){
            next();
        }else{
            return res.status(403).json({
                msg : "admin does not exist"
            });
        }
    }catch(err){
        res.json({
            msg : "Incorrect Inputs"
        })
    }
}

module.exports = adminMiddleware;