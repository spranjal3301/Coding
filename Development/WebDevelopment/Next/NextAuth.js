//! What is next auth?
//* NextAuth is a library that lets you do authentication in Next.js

//` Popoular choices while doing auth include - 
//* External provider - https://auth0.com/  , https://clerk.com/
//* Firebase auth
//* In house using cookies
//! NextAuth
// https://next-auth.js.org/configuration/providers/credentials

// npm install next-auth 

//` Providers
//* OAuth(e.g Github, Twitter, Google, etc..)
//* Email(Passwordless via Verification Token on Email) 
//* Credentials(Username/Email and Password)



//?Create a Catch-all route segment
//`app/api/auth/[...nextauth]/route.ts   (strictly Same)

import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials) {
            // Add logic here to save the user to your database 
            //validate credentials
            return {
                id: "user1"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  pages: {
    signIn: "/auth",
  },  
  callbacks:{
    async session({ token, session }) {
      session.user.id = token.sub

      return session
  }
  }
})

export { handler as GET, handler as POST }

//? .env
// NEXTAUTH_URL=http://localhost:3000
// NEXTAUTH_SECRET=password_nextauth

//? Add app/providers.tsx
'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

//? Wrap layout with Providers
import { Providers } from "./provider";

export default function RootLayout({
  children,
}
// :Readonly<{children: React.ReactNode;}>
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

//-Usage

//? page.tsx
"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    return <div>
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}

//? User details in Client Component
"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      {JSON.stringify(session.data?.user)}
    </div>
  );
}


//? User details in Server Component
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth";
async function getUser() {
  const session = await getServerSession(authOptions);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session?.user?.name)}
    </div>
  );
}
// https://projects.100xdevs.com/tracks/Next-Auth/next-auth-6




//` Prisma Adapter for NextAuth

//- npm install @prisma/client @next-auth/prisma-adapter

/*
- auth.ts
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@repo/db/client";
import type { Adapter } from "next-auth/adapters";
import { SessionStrategy } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secr3t",
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token }: any) {
      return token;
    },
    async session({ session, token }: any) {
      const user = await db.user.findUnique({
        where: {
          id: token.sub,
        },
      });
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.sub;
        session.user.admin = user?.admin;
      }
      return session;
    },
  },
};



-schema.prisma Setup
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Account {
  id                       String  @id @default(cuid())
  userId                   String
  type                     String
  provider                 String
  providerAccountId        String
  refresh_token            String? @db.Text
  refresh_token_expires_in Int?
  access_token             String? @db.Text
  expires_at               Int?
  token_type               String?
  scope                    String?
  id_token                 String? @db.Text
  session_state            String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}


model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  type          Usertype  @default(User)
  accounts      Account[]
  sessions      Session[]
  balances      Balance?
  onRampTransactions OnRampTransaction[]
  sentTransfers     Transfer[]       @relation(name: "FromUserRelation")
  receivedTransfers Transfer[]       @relation(name: "ToUserRelation")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}      
*/              
