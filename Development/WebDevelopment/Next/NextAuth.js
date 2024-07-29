//! What is next auth?
//* NextAuth is a library that lets you do authentication in Next.js

//` Popoular choices while doing auth include - 
//* External provider - https://auth0.com/  , https://clerk.com/
//* Firebase auth
//* In house using cookies
//! NextAuth
// https://next-auth.js.org/configuration/providers/credentials

// npm install next-auth 

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
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }

//? page.tsx
"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    return <div>
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}

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
async function getUser() {
  const session = await getServerSession();
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