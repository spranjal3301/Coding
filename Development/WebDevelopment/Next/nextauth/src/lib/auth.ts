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