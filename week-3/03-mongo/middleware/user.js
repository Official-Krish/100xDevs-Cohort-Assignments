const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; 
    const password = req.headers.password; 
    const user = await findOne({ username: username, password: password });
    if (user){
        next();
    }else{
        res.status(403).json({ message : "user does not exist"});
    }

   
}

module.exports = userMiddleware;