
//!ECMA Script
//*ECMAScript is a "standard" for a scripting language, JavaScript is an implementation of that standard.

//!JavaScript
//* JavaScript have additional features that are not part of ECMA Script like "DOM manupulation" ....
//*JavaScript is a scripting language that enables you to create dynamically updating content,
//* control multimedia, animate images, and pretty much everything else.

//!Common JS Browers Engines
//*V8 (Google Chrome, Chromium, Node.js):C++
//*SpiderMonkey (Firefox): C++ & Rust
//*JavaScriptCore/ Nitro(Safari)


//!Node js 
//*Node.js is an open-source, cross-platform, back-end JavaScript "runtime environment" that runs on the V8 engine 
//*and executes JavaScript code outside a web browser.

//!Bun js
//*Bun is a JavaScript runtime built from scratch using the Zig programming language. It was replacement for Node.js.
//*Bun uses JavaScriptCore as the JavaScript engine.

//!what is backend?
//* The term "backend" refers to the server-side of a software application or system. 
//*backend is responsible for managing the server, databases, and application logic.

//!Key components of a backend typically include:
//*Server(HTTP)
//*Database
//*Application Logic: 
//*APIs (Application Programming Interfaces): 
//*Security:

//!What is a HTTP?
//*HTTP, or Hypertext Transfer Protocol, is an application protocol(set of rules) used for transmitting hypermedia documents, such as HTML
//!What is a HTTP server?
//*An HTTP server is a software application that responds to requests from web browsers by delivering web pages and other web content to the user.
//*When you type a URL (Uniform Resource Locator) into your browser's address bar and press Enter, your browser
//*sends a request to the appropriate HTTP server, which then processes the request and sends back the requested information.

//*server can handle multiple requst and multiple domain name points to same sever

//!How to sent Requst to server?
//~Things need to know before Senting request
//* Protocol server using(HTTP/HTTPs)
//* Domain name or IP address/URL/PORT
//* Route
//* Method(GET/POST/PUT/DELETE)
//* Headers/Body/Query(?n=9&)/Params(:n)
//~Things need to know before Receiving request
//* Status code
//* Headers/Body

//~ Common HTTP methods include:
//? GET: Retrieves data from the server.(receive quary parameter)
//? POST: Submits data to be processed to a specified resource.(receive body parameter)
//? PUT: Updates a resource or creates a new resource.
//? DELETE: Deletes a specified resource.

//~ What are the common status codes the backend responds with?
//? 1. 200 - Everything is ok
//? 2. 201 - Resource created
//? 3. 400 - Bad request/input error
//? 2. 404 - Page/route not found
//? 3. 403 - Authentication issues
//? 4. 500 - Internal server error


//!We use NodeJs for Backend Viva Express Library
//*NVM:Node Version Manager: 
// allows you to easily install and manage different versions of Node and switch between them on a per-shell basis


//*NPM: Node Pakage Manager:install, update, and manage dependencies.
//` npm run <script>: Runs a script defined in the package.json file.
// npm install <package>: Installs a package and adds it to your node_modules directory.
// npm init: Creates a package.json file, which is used to manage project dependencies and scripts.
// npm publish: Publishes a package to the npm registry.
// npm update: Updates the installed packages to the latest version according to the version ranges specified in package.json.
// npm uninstall <package>: Removes a package from your project.


//*NPX: Node Pakage Executor:
//` npm affects your project’s node_modules and package.json.
//` npx is more transient, often used for quick, ad-hoc tasks.




//! Cross-Origin Resource Sharing (CORS) :
//- is a security mechanism implemented by web browsers. It controls how a web page running on one domain (origin) can access resources from a different domain.
//- Why it's needed: CORS helps prevent malicious websites from accessing sensitive data or performing actions on trusted domains without permission.

//! What are CORS Errors?
//* A CORS error occurs when the web browser blocks a cross-origin request because the server's CORS configuration does not permit it

//? npm install cors 
//? const cors=require("cors");
//? app.use(cors());
//? app.use(cors({
    //? origin:"http://localhost:3000",
    //? optionsSuccessStatus: 200 

//?})); //specify the origin that can access the server

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })




