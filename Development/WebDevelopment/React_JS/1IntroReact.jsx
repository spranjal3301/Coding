//!Intro to React


//* Static Webpage:
//?                content of the webpage does not change
//* Dom Manipulation:
//?                  use to make Dynamic Webpage
//* Dynamic Webpage:
//?                 HTML&CSS being inserted into the DOM via JavaScript(DOM Manipulation)


//!Why we need to learn React, Vue & Angular why not Vanilla JS(Raw JS)?
//*DOM manipulation is very hard to write as a developer
//*Making dynamic websites, with the primitives that DOM provides you is very hard
//*Better Way of Doing DOM Manipulation

//* 1. Structure and Organization:
//- Component-based structure:
//?breaking your UI into smaller, reusable pieces that are easier to manage, update,code easier to test, maintain, and scale.

//* 2. Efficiency and Performance
//-Virtual DOM (React, Vue):
//? memory representation of the actual website's DOM When changes are needed, they intelligently analyze the Virtual DOM,
//? determine the minimal updates necessary for the real DOM, and execute only those.
//? This drastically improves rendering performance.

//- Reactivity (Vue, Angular in part):
//? let your UI components automatically re-render when underlying data changes.
//?You don't have to manually manipulate the DOM


//!What is React?
//* A JavaScript library for building user interfaces (UI Library) and most Popular.


//! What is React Used For?
//- Single Page Applications (SPAs):
//? React excels in creating dynamic web applications that update smoothly without full page reloads.


//!Libarary vs Framework
//- A library is a collection of reusable code modules, classes, or functions designed to solve specific problems.
// example:React,Vue,Numpy
//-A framework is a comprehensive skeleton or template and flow for how your code should work .It is a collection of libraries and way of wrting code.
// example:Angular, Django



//! Different between React Vue and Angular
//? React is a UI library, and Vue is a progressive framework & Angular is a full-fledged MVC framework

//-React
//? Component-based architecture
//? Uses JSX, a blend of JavaScript and HTML-like syntax
//? Virtual DOM for efficient updates
//? Single-page application
//? No state management often used Redux

//* Vue:
// Component-based architecture
// Uses HTML-based templates
// Virtual DOM for efficient updates
// Single-page application
// Have State management Vuex


//` Angular:
// Full-fledged MVC framework
// TypeScript-based
// Relies on TypeScript and a distinct template syntax that separates HTML, logic, and styles.
// Single-page application
// Have State management NgRx



//! How does Single Page Applications work in Practice?
// Initial Load: The user first visits your SPA. React loads the base HTML structure, JavaScript, and CSS.
// User Interaction: The user clicks a link to view a product list.
// Client-side Routing: React Router intercepts this change, preventing a full page refresh.
// Component Update: A ProductList component might fetch product data from an API.
// Virtual DOM Diffing: React compares the old Virtual DOM with a new Virtual DOM that would include the product list.
// Efficient DOM Update: React determines the necessary changes and updates the real DOM, displaying the product list.


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

//!This is Hour logic How to render the State
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


