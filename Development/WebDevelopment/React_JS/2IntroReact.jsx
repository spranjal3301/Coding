//!How to Set up React Project?

//!Option 1: (Recommended for React 16.8+)
//-Create a new project directory:
//- Install Create React App: "npx create-react-app ." 
//- Run it: "npm start"

//!Option 2:Manual Setup
//-Create a new project directory:
//-Initialize npm: "npm init -y"
//-Install React and ReactDOM: "npm install react react-dom"
//-Set up a build system (e.g., Webpack or Parcel):
//-Create basic project files:
// index.html
// index.js (Your main React entry point)
// App.js (A sample React component)

// Project Structure:
// A typical React project structure often looks like this:
// my-react-app/
//   public/
//     index.html
//   src/
//     App.js
//     components/
//     index.js
//   package.json


//!Option 3: Using Vite (Recommended for React 17+)
//- Create a new project directory:
//- Run the Vite setup: "npm create vite@latest"
//- Follow the prompts:
        // Select a project name (or press Enter to use the current directory name)
        // Select "React" as your framework
        // Choose between JavaScript or TypeScript
//- Run it: 
//-         "cd <your-project-name>"
//-         "npm install" 
//- "npm run dev"


//*            npm run build
//! React App----------------->HTML+CSS+JS


//!JSX(JavaScript XML)
//-JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

//!To create a react app, you usually need to worry about two things: 1.Component  2. State
//!State:
// -State is a special object that holds data that can change over time.

//!Components:
//-They are reusable pieces of code that tell us how state should render.

//!Re-rendering:
//* State1--->State2(Re-rendering)
// -When the state changes, the component re-renders to reflect the new state.


//~ function component(state){
//~     return( HTML+State )
//~ }