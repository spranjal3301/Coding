//!DataBase:
//*Why we need DataBase why not inmemory database?
//?s It is not scalable ,reliable ,efficient ,secure durable

//*DataBase Types:
//* 1. Relational
//* 2. NoSQL

//!Why don’t we let the user hit the database directly?
//! What extra does the http server provide exactly?

//* 1. Security:Flexibility & Maintainability
//* 2. Scalability & Performance
//* 3. Reliability
//* 4. Efficiency
//* 5. Flexibility


//!How Does the Backend connect to DataBase?
//* Methods of Connection

//* 1.Database Drivers:
// Pieces of software that act as translators between the backend language and the specific database.
// Examples: MySQL Connector (Python) ,JDBC (Java) ,pg (Node.js)

//* 2.Object-Relational Mappers (ORMs):
// Libraries that provide a more abstract way to interact with the database,
// mapping database objects to programming language objects for easier manipulation.
// Examples:SQLAlchemy (Python),Hibernate (Java),Sequelize (Node.js),Prisma (Typescript)

//* 3.REST APIs:
// A standardized way to communicate over HTTP. Your backend might connect to a separate database API,
// which in turn handles database interactions. This offers flexibility and scalability.
// Examples:Express (Node.js),Fastify (Node.js),Django (Python),Flask (Python)



// *Typical Connection Process
//? Establish Connection:
//? Authentication:
//? Execute Queries and Operations:
//? Process Results:
//? Close Connection

//*Terms:
//? Cluster:collection of databases
//? Database:collection of data
//? Table:collection of rows

//!MongoDB(NoSQL) Connection
//npm install mongoose
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://spranjal3301:Pranjalc2@cohort0-100.6yp4i6v.mongodb.net/test")

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected successfully!');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

//!CRUD Operations
//!Create

//~Schema defination
const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    name:String
})

//~Model
const User=mongoose.model("User",userSchema)

//~M01 Create a new user
const newUser=new User({   //-  id=newUser._id
    username:"Pranjal",
    password:"Pranjal123",
    name:"Pranjal Singh"
})

newUser.save()//~Save the user

//~M02 Create a new user
async function findUsers() {
    try {
        const users = await User.create({
            username:"Pranjal",
            password:"Pranjal123",
            name:"Pranjal Singh"
        })
        newUser.save()
    } catch (err) {
        console.error(err);
    }
}

//!Read

async function findUsers() {
    try {
        const users = await User.find({});//~Find all users
        // const users = await User.findById("5f9e3e3e3e3e3e3e3e3e3e3e"); //~ Find by id
        // const users = await User.findOne({ username: "Pranjal" }); //~ Find by username
        console.log(users);
    } catch (err) {
        console.error(err);
    }
}

findUsers(); // Call the async function 

//!Update
// //~Update a user


async function updateUser() {
    try {
        await User.updateOne({ username: "Pranjal" }, { password: "Pranjal1234" });
        console.log("Updated");
    } catch (err) {
        console.error(err);
    }
}

updateUser(); 


//!Delete
//~Delete a user
async function deleteUser() {
    try {
        await User.deleteOne({ username: "Pranjal" });
        console.log("Deleted");
    }
    catch (err) {
        console.error(err);
    }
}
deleteUser();

//*Close the connection
mongoose.connection.close();




