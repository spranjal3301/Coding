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


//`Seed Data:
//*Dummy data for dev
// prisma/seed.ts
//- const user=await prisma.user.upsert({}) //upsert create user if not exist update if exist

//* Update package.json
// "prisma": {
//     "seed": "ts-node prisma/seed.ts"
//   OR  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"       
// }

// *Run command to seed db
// npx prisma db seed



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

//`Transaction
//?M01 
/*
await db.$transaction([
    db.balance.update({
        where:{
            userId:Number(paymentInformation.userId)
        },
        data:{
            amount:{
                increment:Number(paymentInformation.amount)
            }
        }
    }),
    db.onRampTransaction.update({
        where:{
            token:paymentInformation.token
        },
        data:{
            status:"Success"
        }
    })
])
*/
//?M02
/* 
   await prisma.$transaction(async (tx) => {
        const fromBalance = await tx.balance.findUnique({
            where: { userId: Number(from) },
          });
          if (!fromBalance || fromBalance.amount < amount) {
            throw new Error('Insufficient funds');
          }

          await tx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount } },
          });

          await tx.balance.update({
            where: { userId: toUser.id },
            data: { amount: { increment: amount } },
          });
    });
}
*/
//`Relation-queries

//*Prisma supports two strategies for loading relations:
//? join: This strategy uses a single SQL query to load the main record and all its relations.
//? query: This strategy uses multiple SQL queries to load the main record and its relations separately.

//`Example m01 (user + posts)
// const users = await prisma.user.findMany({
//     relationLoadStrategy: 'join', // or 'query'
//     include: {
//       posts: true,
//     },
//   })

//`Example m02 (posts)
// const users = await prisma.user.findMany({
//     relationLoadStrategy: 'join', // or 'query'
//     select: {
//       posts: true,
//     },
//   })

//`DB Locking in postgres
//- in  Mongodb we dont need to locked if 2 request try to access same thing at same time in transaction it revert the transaction
//- in postgres we need to lock the
//- Prism 
// await prisma.$transaction(async (tx) => {
//     await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
// })
export default user;


