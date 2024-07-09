// !Published npm package

//` tsconfig.json
//?"declaration": true,  /* Generate .d.ts files Types of JavaScript files in your project. */

//`package.json
//? "name": "@spranjal3301/blogsly-common",  //unique-name  `import * from "@pranjal/blogsly-common"`
//? "version": "1.0.0",  //-new publish update
//?  "main": "dist/index.js", //-source 

//`.npmignore
//? src/

//-1. npm login
//-2. tsc -b
//-3. npm publish --access public

//? npm install @spranjal3301/blogsly-common 

//export const userProfileSchema = z.object({
//     name: z.string().min(1, { message: "Name cannot be empty" }),
//     email: z.string().email({ message: "Invalid email format" }),
//     age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
//   });

//export type UserProfile = z.infer<typeof userProfileSchema>;