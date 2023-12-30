const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db");

// Admin Routes
router.post('/signup', async function (req, res)  {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    });
    res.json({
        msg : "admin signup successful"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user =  await Admin.find({
        username: username,
        password: password
    });
    if (user){
        const token = jwt.sign({
            username
        },secret);
        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            msg: 'Invalid username or password'
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const authorization= req.headers.Authorization;
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Admin.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    });
    res.json({
        msg : 'Course created successfully', CourseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;