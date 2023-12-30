const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const Passowrd = req.body.Password;
    // if user exists in db
    if (username == Admin.findone({ username : username})){
        res.send("Admin already exists")
    }else{
        Admin.create({
            username : username,
            Passowrd : Passowrd
        });
        res.json({
            message : "Admin Creeated Suuccessfully"
        });
    }

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const desc = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

   const newCourse = await Course.create({
        title : title,
        description : desc,
        imageLink : imageLink,
        price : price
    });
    res.json({
        msg : 'Course created successfully', courseId : newCourse._id
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    })
});

module.exports = router;