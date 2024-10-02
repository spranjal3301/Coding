import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { type: "text", placeholder: "jsmith" },
                password: { type: "password" ,placeholder: "password"}
            },
            async authorize(credentials:any):Promise<any>{
                try {
                    const {username,password}=credentials.identifier;
                    //Zod validation 
                    //db validation
                    // Add logic here to save the user to your database 
                

                } catch (error) {
                    
                }
            }

        })
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks:{
        async session({ token, session }:any) {
          session.user.id = token.sub
    
          return session
        }
    }  
}



const Dummyproviders = [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { type: "text", placeholder: "Phone number" },
        password: { type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        // Do zod validation, OTP validation here
        console.log(credentials);
        if (!credentials.phone || credentials.password) {
          return null;
        }
        const hashedPassword = await hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });
  
        if (existingUser) {
          const passwordValidation = await compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }
  
        //- Create new user
        try {
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });
  
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e) {
          console.error(e);
        }
  
        return null;
      },
    }),
  ];