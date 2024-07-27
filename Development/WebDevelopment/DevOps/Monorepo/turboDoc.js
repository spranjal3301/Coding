//! npx create-turbo@latest
//- npm run dev

//` folder structure
//* End user apps (websites/core backend)
    //? apps/web - A Next.js website
    //? apps/docs - A Docs website that has all the documentation related to your project (or another NEXT app )

//*Helper packages(shared code)
    //? packages/ui - UI packages 
    //? packages/typescript-config - Shareable TS configuration
    //? packages/eslint-config - Shareable ESLine configuration 

//! Example of differnt combination: https://github.com/vercel/turbo/tree/main/examples

//`add a new Common Component
//- cd packages/ui
//- npm run generate:component


//`add React Project to Turborepo
//- cd apps
//- npm create vite@latest 
//- add react-app/package.json
//? "dependencies": {
//?     "@repo/ui": "*",
//?  }



//`add backend(node + Typescript) to Turborepo
//- cd apps 
//- mkdir backend
//- cd backend 
//- npm init -y & npx tsc --init        
//- npm install express @types/express @types/node
//- add backend/tsconfig.json
// {
//     "extends": "@repo/typescript-config/base.json",
//     "compilerOptions": {
//       "lib": ["ES2015"],
//       "rootDir": "./src",
//       "outDir": "./dist"
//     },
//     "exclude": ["node_modules"],
//     "include": ["."]
//   }

//- add to backend/package.json
// "scripts": {
//     "start": "node dist/index.js",
//     "build": "tsc -b",
//     "dev": "tsc -b -w & nodemon dist/index.js"
//   },



//`add a new Common folder to packages
//- cd packages
//- mkdir common
//- cd common
//- npm init -y & npx tsc --init  
//- add common/tsconfig.json
//- add backend/tsconfig.json
// {
//     "extends": "@repo/typescript-config/base.json",
//     "compilerOptions": {
//       "lib": ["ES2015"],
//       "outDir": "./dist"
//     },
//     "exclude": ["node_modules"],
//     "include": ["."]
//   }

//- add to common/package.json
// "exports": {
//     "./config": "./src/"index.ts",
//   },

//~ run "npm install" in Global folder to install the common package in other folders
//- add to where we want to use Common (backend/package.json)
//? "dependencies": {
//?     "@repo/common": "*",
//?  }

//! tsc compiler will not work(export error) add diff compiler to backend/common 




//`tsup(Typescript Compiler)
//- npm install tsup
//- mkdir tsup.config.ts add:
// {
//     "extends": "@repo/typescript-config/base.json",
//     "compilerOptions": {
//       "lib": ["ES2015"],
//       "outDir": "./dist"
//     },
//     "exclude": ["node_modules"],
//     "include": ["."]
//   }

//- add to backend/package.json
// "dev": "tsup --watch --onSuccess \"node dist/index.js\"",
// "build": "tsup",




//` esbuild(Typescript Compiler)
// Install esbuild
//? npm install esbuild
// Add build script to package.json
//? "build": "esbuild src/index.ts --platform=node --bundle --outdir=dist"