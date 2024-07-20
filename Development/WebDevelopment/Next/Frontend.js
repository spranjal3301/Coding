//!NextJS
//* Next.js is a full stack framework that allows you to build static or server-rendered web applications using React. 

//?In a React project, you have to maintain a separate Backend project for your API routes
//?React does not provide out of the box routing (you have to use react-router-dom)
//?React is not SEO Optimised not exactly true today because of React Server components
//?Waterfalling problem:series Request problem

//` Next.js offerings
//* Server side rendering - Get’s rid of SEO problems
//* API routes - Single codebase with frontend and backend
//* File based routing (no need for react-router-dom)
//* Bundle size optimisations, Static site generation
//* Maintained by the Vercel team

//` Downsides - 
//* Can’t be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
//* Very opinionated, very hard to move out of it

// npx create-next-app@latest
// npm run dev

//-old pages based Routing(Client Components by default)
//-new App based Routing(Server Components by default)  

//` Root directory:
//* src/app/: This is the main directory for the App Router.
//* src/public/: For static assets like images, fonts, etc.
//* src/components/: For reusable React components (optional, but common).

//` Inside the app/ directory:
//* page.tsx: Defines the UI for the route. This file makes a route segment publicly accessible.
//* layout.tsx: A layout is UI that is shared between routes Eg:Header,Footer...
//* loading.tsx: Creates loading UI for any segment of Route.
//* error.tsx: Defines error UI any segment of Route.
//* not-found.tsx: Creates UI for 404 errors.
//* default	.js .jsx .tsx	Parallel route fallback page
//* 404	.js .jsx .tsx	404 Error Page
//* 500	.js .jsx .tsx	500 Error Page


//`FileBase Routing
//`Routes are defined by the file and folder structure in the app directory. Each folder represents a route segment.
//? src/app/
//? ├── page.tsx            # Home route: /
//? ├── not-found.tsx       # 404 not-found page
//? ├── loading.tsx         # global loader page
//? ├── error.tsx         # global error UI page
//? ├── about/
//? │   └── page.tsx        # About route: /about
//? ├── blog/
//? │   ├── page.tsx        # Blog index: /blog
//? │   └── [slug]/
//? │       └── page.tsx    # Blog post: /blog/post-1
//? |
//? ├── (auth)
//? │   ├── signup        
//? │   │   └── page.tsx    # signin page: /signup
//? |   ├── signin        
//? │   │   └── page.tsx    # signup page: /signup
//? |

//` layout.tsx: 
//*A layout is UI that is shared between routes Eg:Header,Footer,discountOffer...
//*EveryRoute can have there own layout

//` (folder) Group routes without affecting routing  its help in add common things  Eg:auth in not came in route


//`[folder]	Dynamic route segment:
//*"app/blog/[slug]/page.js" This would match routes like /blog/post-1, /blog/my-article, etc.

//`[...folder]	Catch-all route segment
//*app/shop/[...categories]/page.js This would match routes like /shop/clothes, /shop/clothes/shirts, 
//*/shop/clothes/shirts/t-shirts, etc.

//`[[...folder]]	Optional catch-all route segment
//*For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes,
//* /shop/clothes/tops, /shop/clothes/tops/t-shirts



//` _folderName :folder and all its subfolders is a private implementation detail and should not be considered by the routing system
//- a route is not publicly accessible until a page.jsx or route.jsx file is added to a route segment.
//-private folders are not required
// You can create URL segments that start with an underscore by prefixing the folder name with %5F (the URL-encoded form of an underscore): %5FfolderName.

//` @folder:simultaneously or conditionally render one or more pages within the same layout. 

// (.)folder	Intercept same level
// (..)folder	Intercept one level above
// (..)(..)folder	Intercept two levels above
// (...)folder	Intercept from root


//! Client and server components
//?Client components are React components that are rendered on the client side.
//?Server components are React components that are rendered on the server side.
//?Server components are rendered on the server side and sent to the client as HTML.
//?Client components are rendered on the client side after the server components are hydrated.


//` When should you create client components ?
//* Whenever you get an error that tells you that you need to create a client component
//* Whenever you’re using something that the server doesn’t understand (useEffect, useState, onClick…)
//* Rule of thumb is to defer the client as much as possible


//- If you wan’t to mark a component as a client component, you need to add the following to the top of the component - 
//! "use client"

//!Onclick Routing
//` import { useRouter } from 'next/navigation'
//` const router = useRouter()
{/*//? <button type="button" onClick={() => router.push('/dashboard')}>
//?Dashboard
//?</button> */}



