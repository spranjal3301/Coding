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

//!What is State in React?
//? State is used to store data that changes over time

//-function React( Current Data of webpage(State) , logic How to render the State)
//~React takes State and renders it in the UI.
//~React only updates the UI when State changes.(do not re-render the whole UI every time)

//~React uses Virtual DOM concept to update the UI.
//~



//!This is React DOM/React Native
function addTodo() {
        // big function we wrote in the beginning
      }
  
      function removeTodo(todo) {
        const element = document.getElementById(todo.id);
        element.parent.removeChild(element);
      }
  
      function updateTodo(oldTodo, newTodo) {
        const element = document.getElementById(oldTodo.id);
        element.children[0].innerHTML = newTodo.title;
        element.children[1].innerHTML = newTodo.description;
        element.children[0].innerHTML = newTodo.completed ? "Mark as done" : "Done";
      }
  
  
      
   //!This is React   
   //~updates the UI when State changes
   let globalId = 1;
   let todoState = [];
   let oldTodoState = [];
      function updateState(newTodos) {
        // calculate the diff b/w newTodos and oldTodos.
        // More specifically, find out what todos are - 
        // 1. added
        // 2. deleted
        // 3. updated
        const added = [];
        const deleted = [];
        const updated = [];
        // calculate these 3 arrays
        // call addTodo, removeTodo, updateTodo functions on each of the
        // elements
        oldTodoState = newTodos;
      }
  
  //!This is our logic How to render the State
      function addTodo() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        todoState.push({
          title: title,
          description: description,
          id: globalId++,
        })
        updateState(todoState);
      }
  
  
  //! How does Single Page Applications work in Practice?
// Initial Load: The user first visits your SPA. React loads the base HTML structure, JavaScript, and CSS.
// User Interaction: The user clicks a link to view a product list.
// Client-side Routing: React Router intercepts this change, preventing a full page refresh.
// Component Update: A ProductList component might fetch product data from an API.
// Virtual DOM Diffing: React compares the old Virtual DOM with a new Virtual DOM that would include the product list.
// Efficient DOM Update: React determines the necessary changes and updates the real DOM, displaying the product list.