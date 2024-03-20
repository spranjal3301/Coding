const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    const UserData={
        username:req.body.username,
        password:req.body.password
    }
    const user=await User.findOne({username:UserData.username});
    
    if(!user){
        const newUser=new User(UserData);
        newUser.save();
        res.json({ message: 'User created successfully' });
    }else{
        res.json({ message: 'User Already Exist' });
    }
});

router.get('/courses',async (req, res) => {
    const Allcourses=await Course.find({});
    
    res.json({Course:Allcourses});
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
   const courseId=req.params.courseId;
   const userData={
         username:req.headers.username,
        password:req.headers.password
   }
   console.log(userData);
   await User.updateOne({username:userData.username},{$push:{PurchasedCourses:courseId}})
    res.json({ message: 'Course purchased successfully' });

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    const AllpurchasedCourses=await User.findOne({username:req.headers.username});
    // const Allcourses=await Course.find({_id:AllpurchasedCourses.PurchasedCourses});
    const Allcourses=await Course.find({_id:{ $in: AllpurchasedCourses.PurchasedCourses}});//~in operator Array of values

    res.json({purchasedCourses:Allcourses});
});

module.exports = router