const express=require('express');
const app=express();
const port=3000;
app.use(express.json());


//!Zod
//* input schema validation library
//* check input schema before calling route handler save time and effort

//nmp install zod
const zod=require('zod');

//*Schema definition
const userSchema=zod.array(zod.number());

//*complex zod schema example
const complexSchema=zod.object({
    name:zod.string(),
    age:zod.number().positive().int(),
    isStudent:zod.boolean(),
    subjects:zod.array(zod.string()).optional(),
    email:zod.string().email()
});

//example body of complex schema
// req.body={
//     name:"pranjal",
//     age:20,
//     isStudent:true,
//     subjects:["maths","english"]
//     email:"pranjal@123"
// }




app.post('/users',(req,res)=>{
        //~validation using create schema
        const check=userSchema.safeParse(req.body.arr);
        
        //~check.success  ===> true/false
        res.send(check);
});


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});

//!Zod types
//  primitive values
// z.string();
// z.number();
// z.bigint();
// z.boolean();
// z.date();
// z.symbol();

 // empty types
// z.undefined();
// z.null();
// z.void(); // accepts undefined

 // catch-all types
//  allows any value
// z.any();
// z.unknown();

//  never type
//  allows no values
// z.never();

const schema = z.coerce.string();
schema.parse("tuna"); // => "tuna"
schema.parse(12); // => "12"
schema.parse(true); // => "true"