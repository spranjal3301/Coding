//!Backend
//? /app
//?   /api
//?     /[route]
//?       route.ts
//?   /lib
//?     /db.ts
//? /config
//?   /env.ts
//? /middleware.ts
//? /types
//? /utils

// /app/api: Contains API routes using the new App Router
// /app/lib: Shared backend utilities, like database connections
// /config: Environment and configuration files
// /middleware.ts: Global middleware for API routes
// /types: TypeScript type definitions
// /utils: Utility functions

//~api folder is just convention, you can name it anything you want but it is recommended to keep it as api for better understanding of the project structure.
//~page.tsx it is the UI for the route ,route.ts mean backend for route.

//` route	.js .ts	API endpoint
//* Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

//- export async function GET(request: Request) {}
 
//- export async function HEAD(request: Request) {}
 
//- export async function POST(request: Request) {}
 
//- export async function PUT(request: Request) {}
 
//- export async function DELETE(request: Request) {}
 
//- export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
//- export async function OPTIONS(request: Request) {}


//? app/api/dashboard/[team]/route.ts
//? type Params = {
//?     team: string
//?   }
   
//?   export async function GET(request: Request, context: { params: Params }) {
//- Define params type according to your route parameters (see table below)
        const team = context.params.team // '1'
        const body = await request.json();
        const query = request.query;
        const headers = request.headers;
//?   }

//?import { NextRequest, NextResponse } from 'next/server';
//? export async function POST(req: NextRequest) {
//?     const body = await req.json();

//?     return NextResponse.json({ username: body.username, password: body.password })
//? }



//`Request is the standard Web API that you use in the browser and in recent versions of Node.js

//`NextRequest(adv version of NextRequest) is a subclass of Request that adds several properties and methods. It's used in middleware

//`NextApiRequest extends Node.js' IncomingMessage (from node:http) and also adds several helpers to it. It's used in API routes

//- NextApiRequest is the type you use in the pages router "API Routes"
//- NextRequest is the type you use in the app router "Route handlers"

//`  import { cookies } from 'next/headers'
//` import { headers } from 'next/headers'
const headersList = headers()



//! Linking and Navigating
//* There are four ways to navigate between routes in Next.js:
//? Using the redirect function (Server Components)
//? Using the native History API

//? Using the <Link> Component
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Page() {
        const pathname = usePathname()
        return <> <Link href="/dashboard">Dashboard</Link>
         <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
  </>
}

//? Using the useRouter hook (Client Components)
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}


//! Server Actions

// Ref - https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

//` What if you could do a simple function call (even on a client component  that would run on the server?) (similar to RPC )4
//` Under the hood, still an HTTP request would go out. But you would feel like you’re making a function call

//! Benefits of server actions
//` Single function can be used in both client and server components
//? Gives you types of the function response on the frontend (very similar to trpc)
//? Can be integrated seamlessly with forms (ref https://www.youtube.com/watch?v=dDpZfOQBMaU)


// Steps to follow
// Create actions/user.ts file (you can create it in a different folder)
// Write a function that takes username and password as input and stores it in the DB
"use server"

import client from "@/db"

export async function signup(username, password) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}

// Update the Signup/page.tsx file to do the function call
import { signup } from "@/actions/user";;

<button onClick={async () => {
    const response = await signup(username, password);
    localStorage.setItem("token", response);
    router.push("/")
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>

