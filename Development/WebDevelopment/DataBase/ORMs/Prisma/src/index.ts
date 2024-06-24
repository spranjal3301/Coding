//!Object-Relational Mappers (ORMs):
//* are tools that allow developers to interact with a database using an object-oriented paradigm.
//* Instead of writing raw SQL queries to perform CRUD (Create, Read, Update, Delete) operations, developers can
//* use ORM libraries to manipulate database records as if they were regular objects in the programming language they are using.

//- Table--->Class
//- Row--->Object
//- Column--->Attribute(Class Variable)


//`Advantages of Using ORMs:
//? Project Became DB in independent.
// Productivity: Faster development by reducing the amount of boilerplate code.
// Maintainability: Easier to maintain and refactor code.
// Portability: Easier to switch between different database systems.
// Security: Protection against SQL injection attacks by using parameterized queries.


//!Prisma: 
//-Nodejs & Typescript ORM

//` Prisma is a modern database toolkit that consists of three main tools:
//* Prisma Client: An auto-generated and type-safe query builder that's tailored to your database schema.
//* Prisma Migrate: A declarative data modeling and migration tool.
//* Prisma Studio: A visual editor to view and edit data in your database.


// "npm install prisma typescript ts-node @types/node --save-dev"
// "npx tsc --init"
// "npx prisma init"
// defind model in schema.prisma file

//`Any time update the schema.prisma file, you need to run the following commands:
// npx prisma migrate dev --name Initialize the schema
// npx prisma generate //? generate the client

// npx prisma studio  //?for visual db editor



import { PrismaClient } from '@prisma/client';

// https://www.prisma.io/docs/getting-started/quickstart

class userTable{
    prisma;
    constructor() {
       this.prisma = new PrismaClient();
    }

    async createUser(Userdata:any){
        const user = await this.prisma.user.create({
            data:Userdata
        });
        return user;
    }

    async getUsers(){
        const users = await this.prisma.user.findMany();
        return users;
    }

    async getUserById(id:number){
        const user = await this.prisma.user.findUnique({
            where:{
                id:id
            }
        });
        return user;
    }

    async updateUser(id:number,userData:Object){
        const user = await this.prisma.user.update({
            where:{
                id:id
            },
            data:userData
        });
        return user;
    }

    async deleteUser(id:number){
        const user = await this.prisma.user.delete({
            where:{
                id:id
            }
        });
        return user;
    }
}

const user = new userTable();

export default user;


