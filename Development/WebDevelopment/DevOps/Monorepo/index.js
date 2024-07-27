//! What are monorepos
//* a single repository (on github lets say) that holds all your frontend, backend, devops code.


//! Why Monorepos?
//* Enhanced Collaboration
//* Shared Code Reuse
//* Optimized Builds and CI/CD

//! Classic Ways to Structure a Monorepo
//* Create Common floder---push--->npm publish--->install in other projects{backend,frontend,devops}

//!Why we don't use the direct import of the common folder in other projects{backend,frontend}
//* It's not easy to maintain
//* we can do this but we have to first build the common folder and then other folders and look for the changes in the common folder and then build again.

//! Common monorepo framework in Node.js
//* Lerna
//* Nx
//* Rush
//* Yarn Workspaces
//` Turborepo - https://turbo.build/ — Not exactly a monorepo framework

//! Build system vs Build system orchestrator vs Monorepo framework

//` Build System
//*A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer. 
//* For JavaScript and TypeScript projects, this process can include transpilation (converting TS to JS), bundling (combining multiple files into fewer files), minification (reducing file size), and more. 
//* A build system might also handle running tests, linting, and deploying applications.
//?EG: Webpack, Rollup, Parcel, Babel, TypeScript Compiler,Vite, Jest, ESLint, Prettier, Husky


//` Monorepo framework
//* A monorepo framework provides tools and conventions for managing projects that contain
//* multiple packages or applications within a single repository (monorepo).
//* This includes dependency management between packages, workspace configuration.

//` Build System Orchestrator
//* A build system orchestrator is a tool that coordinates the execution of multiple build systems.
//* Rather than a direct build system itself It doesn't directly perform tasks like transpilation, bundling, minification, or running tests.
//* Instead, allows you to define tasks that call other tools (which are the actual build systems) to perform these actions. 
//?EG:Turborepo

//? Turborepo as a build system orchestrator
// Caching
// Parallelization
// Dependency Graph Awareness:

//`Code sharing:
//? Two NEXT.js projects sharing the same component library
//? A backend project sharing types with a frontend project
//? NEXT.js EXPRESS and SOCKET.IO sharing common code
//? A shared TypeScript configuration across all projects
//? A shared ESLint configuration across all projects








    