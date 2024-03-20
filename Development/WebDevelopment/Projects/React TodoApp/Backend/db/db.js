const mongoose=require('mongoose');
const mongodbKey="mongodb+srv://spranjal3301:Pranjalc2@cohort0-100.6yp4i6v.mongodb.net/todoApp";

mongoose.connect(mongodbKey);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected successfully!');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});


const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean  
}) 

const todos=mongoose.model('todos',todoSchema);

module.exports={
    todos
}


