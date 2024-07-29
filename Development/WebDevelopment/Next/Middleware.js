//! Middleware in NEXTJS
//* Middleware is a function that runs before the route handler. It is used to perform some common tasks like authentication, logging, etc.

//- middleware.ts: Global middleware for API routes
//* While only one middleware.ts file is supported per project,you can still organize your middleware logic modularly.
//* Break out middleware functionalities into separate .ts or .js files and import them into your main middleware.ts file.

//? /middleware.ts : same level as app, or inside src if applicable.

//? https://nextjs.org/docs/app/building-your-application/routing/middleware
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    //return NextResponse.redirect(new URL('/home', request.url))
    // requestcnt++;
    const res=NextResponse.next();

    //Some logic to after the Main response
    return res;

}

//* This middleware will be called for every request from the client and server both

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'], // This will be called /about and /dashboard
  }

// export function middleware(request: NextRequest) {
//     console.log(request.nextUrl.pathname)
//     if (request.nextUrl.pathname.startsWith('/admin')) {
//       return NextResponse.redirect(new URL('/signin', request.url))
//     }
   
//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//       return NextResponse.next()
//     }
//   }

