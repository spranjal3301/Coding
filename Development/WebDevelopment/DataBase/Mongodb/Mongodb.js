const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://spranjal3301:Pranjalc2@cohort0-100.6yp4i6v.mongodb.net/test")

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected successfully!');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    purchasesCourses:[
        {
            type:mongoose.Schema.Types.ObjectId, //~Reference Key to Course (Foreign Key(Primary Key of Course))
            ref:"Course" //~Reference
        }
    ]
});

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String
});

const User=mongoose.model("User",userSchema);
const Course=mongoose.model("Course",CourseSchema);


//!Update
// //~Update a user
async function updateUser() {
    try {
        await User.updateOne({"Username":"1"},//~Update a user with username 1
        {
            $push:{
                purchasesCourses:"5f9e3e3e3e3e3e3e3e3e3e3e"    //~Push the course id to the purchasesCourses array
            }                                                  //~$in is used to push the value to the array
        });
       
        // await User.updateMany({},{purchasesCourses:"5f9e3e3e3e3e3e3e3e3e3e3e"}); //~Update all
        console.log("Updated");
    } catch (err) {
        console.error(err);
    }
}