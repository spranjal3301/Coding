//! Packages and Modules
//* packages" and "modules" are often used interchangeably but they have distinct meanings.

//` Modules
//* module is a single JavaScript file that exports functionality (e.g., functions, objects, classes)
//* which can then be imported and used in other parts of the application.

//- Module Loading

//` CommonJS: Synchronous
//* cached after the first time they are loaded.
//* only server-side applications

// Importing a module
const module = require('./module');
// Exporting a module
module.exports = function() { /*...*/ };



//` ES Modules: Asynchronous
//* do not cache modules by default in the same way. Each import can potentially reload the module, 
//* so the module is reevaluated each time it is imported.
//* both client-side and server-side development,

// Importing a module
import { functionName } from './module';
// Exporting a module
export function functionName() { /*...*/ }

// Dynamic import
import('./module').then(module => {
    module.functionName();
  });

//-for server-side change default "type": "commonjs"  
// package.json
// {
//?   "type": "module"
// }


//` Packages
//* A package is a collection of one or more modules bundled together,
//* along with a package.json file that provides metadata about the package (e.g., name, version, dependencies).
//* Packages are used to distribute reusable code. They can include libraries, frameworks, tools, and any other reusable piece of code

//- package.json
//* package.json file is a manifest file that contains metadata about the project,
//*  including its dependencies, scripts, version, author, and more

//? Metadata: Basic information about the project, such as name, version, description, main (entry point), author, and license.
//? Dependencies: Lists of project dependencies and their versions. There are typically two main sections:
//? dependencies: Packages required for the project to run.
//? devDependencies: Packages required only for development purposes (e.g., testing frameworks, build tools).

//~ Scripts: Custom scripts that can be run using npm run <script-name>.
//~ --save-dev or -D flag in npm install adds a package to a project's devDependencies section in the package.json
//~ -g or --global flag installs a package globally, making it available to all projects on the system.

const packageJson={
    "name": "my-project",
    "version": "1.0.0",
    "description": "A sample project",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "start": "node index.js" | "nodemon index.js",  //?npm run start
      "test": "mocha"
    },
    "author": "Your Name",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    },
    "devDependencies": {
      "mocha": "^8.0.1"
    }
  }

//- package-lock.json 
//* file is automatically generated by npm and contains the exact versions of each dependency 
//* (and their dependencies) installed in the node_modules directory
//* is for locking the dependencies to specific versions or your system, ensuring consistency across different installations.



