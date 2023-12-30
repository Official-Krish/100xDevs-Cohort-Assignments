const mongoose = require('mongooose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://KrishAnand:1032004Krish@cluster.vsim6kf.mongodb.net/Course_Selling_app_2');


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    Password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    Password : String,
    purcahsedCourses:[{
        type : mongoose.Schema.Types.objectId,
        ref : 'courses'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title :  String,
    description : String,
    imageLink : String,
    price :  Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}