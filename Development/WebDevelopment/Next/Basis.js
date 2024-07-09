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


//` Root directory:
//* src/app/: This is the main directory for the App Router.
//* src/public/: For static assets like images, fonts, etc.
//* src/components/: For reusable React components (optional, but common).

//` Inside the app/ directory:
//* page.js: Defines the UI for the route. This file makes a route segment publicly accessible.
//* layout.js: Defines shared layouts for a segment and its children.
//* loading.js: Creates loading UI for a segment.
//* error.js: Defines error UI for a segment.
//* not-found.js: Creates UI for 404 errors.


//`FileBase Routing
//`Routes are defined by the file and folder structure in the app directory. Each folder represents a route segment.
//? src/app/
//? ├── page.tsx            # Home route: /
//? ├── about/
//? │   └── page.tsx        # About route: /about
//? ├── blog/
//? │   ├── page.tsx        # Blog index: /blog
//? │   └── [slug]/
//? │       └── page.tsx    # Blog post: /blog/post-1