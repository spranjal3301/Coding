//! Serverless Backend
//* is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers.
//* The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators 
//* do not have to worry about the servers.

//` Advantages of Serverless
//? Easier Deploy
//? Autoscale
//? Charge you on a per request basis (rather than you paying for VMs)

//` Problems with this approach
//? More expensive at scale
//? Cold start problem 

//` Famous serverless providers
//? AWS Lambda
//? Google Cloud Funcions/Fire
//? Cloudflare Workers

//` Backend-as-a-Service (BaaS)
//? Firebase : Known for real-time database, authentication, and hosting services.
//? Supabase: Popular for its open-source approach, PostgreSQL support, and real-time subscriptions
//? AWS Amplify : Amazon's offering with features like data storage, authentication, and serverless functions.
//? Appwrite : Offers database, authentication, storage, and cloud functions for web and mobile apps.


//! Cloudflare Workers(CFW)
//* Cloudflare Workers provide a serverless execution environment, meaning you don't need 
//* to manage or provision servers. You write your code, and Cloudflare takes care of deploying and running it.
//* Cloudflare Workers use JavaScript and WebAssembly to run your code.
//- Takes care of scaling, security, and performance(CDN).




//` useCase 
//? Content Delivery Optimization
//?API Gateway: intermediary between clients and backend services, handling tasks like authentication, rate limiting, and data transformation
//? Security: Add security headers, manage access controls, and mitigate DDoS attacks.

//- Initialize a worker
// npm create cloudflare -- my-app or  npm create cloudflare@latest

//`dependency Wrangler
//* The Workers command-line interface, Wrangler, allows you to create, test, and deploy your Workers projects.

//!Env (.env-->wrangler.toml)

//~Express is not working in cloudflare workers because it is a hevely dependent on nodejs 
//~and cloudflare workers are not nodejs based it have there own Runtime.
//`We use "Hono" instead of express in cloudflare workers

//! Hono - means flame🔥 in Japanese :
//* is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime:
//* Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.

// npm create hono@latest my-app


//`Prisma
//*Prisma is not working in cloudflare workers because it is a hevely dependent on nodejs
//*and cloudflare workers are not nodejs based it have there own Runtime.
//*We use "Fauna" instead of Prisma in cloudflare workers 
//*Fauna is a serverless cloud database that offers global access, real-time data, and built-in security.

//*And other reason to not use Prisma because every cloudflare workers try to connect repeatedly to DB and  user limit exceed.
//* using Connection Pooling in cloudflare workers to avoid this problem.
// https://www.prisma.io/docs/orm/prisma-client/deployment/edge/deploy-to-cloudflare#prerequisites

//`Connection Pooling
//* Connection pooling is a technique used to improve performance in applications with a large number of clients.
//* It reduces the overhead of opening and closing connections to the database by reusing existing connections.
//* Connection pooling can be implemented in the application code or by using a connection pool library.

//- Cloudflare[Workers1,Workers2,Workers3...]--->Connection Pool--->Prisma[DB]
