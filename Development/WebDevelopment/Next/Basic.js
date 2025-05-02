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







//` Client-side rendering (CSR)
//*  is a modern technique used in web development where the rendering of a webpage is 
//* performed in the browser using JavaScript. Instead of the server sending a fully rendered HTML page to the client
 
//? Good example of CSR - React(You write components, JS renders them to the DOM)

//- Downsides?
// Not SEO optimised
// User sees a flash before the page renders
// Waterfalling problem




//` Server Side rendering:
//* When the rendering process (converting JS components to HTML) happens on the server, it’s called SSR. 

//- Why SSR?
// SEO Optimisations
// Gets rid of the waterfalling problem
// No white flash before you see content

//- Downsides of SSR?
//~ Expensive since every request needs to render on the server(Solution: Static Site Generation)
// Harder to scale, you can’t cache to CDNs

//? Good example of SSR - Next.js, pure HTML websites





//` Static Site Generation:
//* If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page
//*  HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.


//- Why?
//* If you use static site generation, you can defer the expensive operation of rendering a page to the build time so it only happens once. 

//- Downsides?
//* Not good for pages that need to be updated frequently or have dynamic data 
//* Not good for pages that need to be personalised (Same page for everyone Problem)





//` Incremental Static Regeneration: (control SSR + SSG)
//* Update static content without rebuilding the entire site.
//* Incremental Static Regeneration allows you to update static content instantly without rebuilding the entire site.

//- Clear cache every 10 seconds and revalidate
const res = await fetch('https://sum-server.100xdevs.com/todos', {
  next: { revalidate: 10 }
});


//- Clear cache in a next action
import { revalidateTag } from 'next/cache'
const resp = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
revalidate()


'use server'

import { revalidateTag } from 'next/cache'
export default async function revalidate() {
revalidateTag('todos')
}


//` Convert a SSR page to SSG/ISR

  //- Example of a SSR page : pages/[userId].tsx

  //! genrateStaticParams() is reseved function which is used to generate static paths
  //* generateStaticParams should return an array of objects where each object represents the populated dynamic segments of a single route.

  export const revalidate = 10; //- this pagerevalidate every 10 seconds

  export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json()) 
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }