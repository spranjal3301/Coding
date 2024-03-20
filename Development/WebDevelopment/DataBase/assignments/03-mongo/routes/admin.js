const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();



// Admin Routes
router.post('/signup',async (req, res) => {
    const Admindata={
        username:req.body.username,
        password:req.body.password
    }
    const user=await Admin.findOne({username:Admindata.username});
    
    if(!user){
        const newAdmin=new Admin(Admindata);
        newAdmin.save();
        res.json({ message: 'Admin created successfully' });
    }else{
        res.json({ message: 'Admin Already Exist' });
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    const Admindata={
        username:req.headers.username,
        password:req.headers.password
    }
    const CourseData={
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink 
    }
    console.log(Admindata);

    const newCourse=await Course.create(CourseData);
    newCourse.save();
    res.json({ message: 'Course created successfully', courseId: newCourse._id });

    
});

router.get('/courses', adminMiddleware,async (req, res) => {
    
    const Allcourses=await Course.find({});
    
    res.json({Course:Allcourses});
});

module.exports = router;