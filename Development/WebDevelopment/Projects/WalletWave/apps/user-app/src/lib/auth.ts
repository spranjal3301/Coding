import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@repo/db";
import type { Adapter } from "next-auth/adapters";
import { pages } from "next/dist/build/templates/app-page";
                  


export const authOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callback: {
    async session({ session,token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages:{
    signIn: '/signin',
  }
};
