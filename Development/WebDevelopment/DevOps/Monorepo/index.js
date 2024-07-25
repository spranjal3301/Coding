//! What are monorepos
//* a single repository (on github lets say) that holds all your frontend, backend, devops code.


//! Why Monorepos?
//* Enhanced Collaboration
//* Shared Code Reuse
//* Optimized Builds and CI/CD

//! Classic Ways to Structure a Monorepo
//* Create Common floder---push--->npm publish--->install in other projects{backend,frontend,devops}

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