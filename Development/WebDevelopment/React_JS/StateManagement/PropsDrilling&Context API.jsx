//!Props Drilling
//* The process of passing data from a parent component down through multiple layers of nested components, even if some of those intermediate components don't actually need that data themselves.



//- Why Props Drilling Can Be Problematic
//*  Understanding the data flow of your application gets more difficult with deep nesting.
//*code harder to maintain.

//- How to Avoid Props Drilling
//? Context API: 
//? State Management Libraries: 
//? Component Composition:



//!Context API
//* A way to share data between React components without having to pass props down through every level of your component tree.

//*Context API is nothing but Syntax sugar for prop drilling it only makes the code look cleaner and more readable

//*Context API do not affect re-rendering of the components, it same as previous.

//- When to Use Context API
//* Globally Available Data: Data that several components throughout your application might need, such as:
        //? User authentication state (logged in or not)
        //? Theme preferences (light or dark mode)
        //? Selected Language
//* Context is better suited for data that doesn't change constantly. Frequent re-renders of all components consuming the context can create performance issues.


//- Key Components of Context API:
 
//* createContext:
//? The createContext function is used to create a context. It returns an object with two components - Provider and Consumer.
 const MyContext = React.createContext();
 
//* Provider:
//? The Provider component is responsible for providing the context value to its descendants. It is placed at the top of the component tree.
<MyContext.Provider value={SomeValue}>
  {/* Components that can access the context value */}
</MyContext.Provider>
 
//* Consumer (or useContext hook):
//? The Consumer component allows components to consume the context value. Alternatively, the useContext hook can be used for a more concise syntax.

//?<MyContext.Consumer>
//?  {value => /* render something based on the context value */}
//?</MyContext.Consumer>
or
const value = useContext(MyContext);

//- Use the useContext hook inside a component to retrieve the current value provided by the nearest matching Provider above in the component tree.



// Create a context
const UserContext = React.createContext();

// Top-level component with a Provider
function App() {
  const user = { username: "john_doe", role: "user" };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

// Intermediate component
function Profile() {
  return <Navbar />;
}

// Deepest component consuming the context value
function Navbar() {
  const user = useContext(UserContext);

  return (
    <nav>
      <p>Welcome, {user.username} ({user.role})</p>
    </nav>
  );
}

//`Context do not fixed re-rendering issue, it same as previous.`
//`To Reduce the Re-rendering and avoid the prop drilling we can use the State Management Libraries like Redux, MobX, Recoil, etc.`