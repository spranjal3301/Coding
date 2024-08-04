import CredentialsProvider from "next-auth/providers/credentials"   
import db from '@repo/db'
import { compare,hash } from 'bcrypt'

const providers=[ CredentialsProvider({
    name:'Credentials',
    credentials:{
        phone:{type: "text",placeholder:"Phone number"},
        password:{type:"password",placeholder:"Password"}
    },
    async authorize(credentials: any) {
        // Do zod validation, OTP validation here
        const hashedPassword = await hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
            where: {
                number: credentials.phone
            }
        });

        if (existingUser) {
            const passwordValidation = await compare(credentials.password, existingUser.password);
            if (passwordValidation) {
                return {
                    id: existingUser.id.toString(),
                    name: existingUser.name,
                    email: existingUser.number
                }
            }
            return null;
        }

        try {
            const user = await db.user.create({
                data: {
                    number: credentials.phone,
                    password: hashedPassword
                }
            });
        
            return {
                id: user.id.toString(),
                name: user.name,
                email: user.number
            }
        } catch(e) {
            console.error(e);
        }

        return null
      }
})]

export const authOptions = {
    providers,
    secret:process.env.NEXTAUTH_SECRET || "secret",
    callback:{
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        }
    }
}