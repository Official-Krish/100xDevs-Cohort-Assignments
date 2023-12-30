const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const{ User, Course } = require("../db");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    if(username ==  User.find({ username: username })){
        res.json({msg : "user already exits"});
    }else{
        User.create({username: username, password: password});
        res.json({msg : 'User created successfully'});
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res,json({
        courses : courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseID = req.params.courseId;
    const useraname = req.headers.username;
    await User.updateOne({
        username : useraname
    },{
        "$push" : {
            purchasedCourses : courseID
        }
    });
    res.json({
        msg : "Course Purchased"
    })
});



router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router