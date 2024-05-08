//! SPAs,Client-Side Routing,Client-Side Bundling,Lazy Loading



//! 1. Single Page Applications (SPAs):

//- How does Single Page Applications work in Practice?
// Initial Load: The user first visits your SPA. React loads the base HTML structure, JavaScript, and CSS.
// User Interaction: The user clicks a link to view a product list.
// Client-side Routing: React Router intercepts this change, preventing a full page refresh.
// Component Update: A ProductList component might fetch product data from an API.
// Virtual DOM Diffing: React compares the old Virtual DOM with a new Virtual DOM that would include the product list.
// Efficient DOM Update: React determines the necessary changes and updates the real DOM, displaying the product list.

//!3.Client-side bundling
//*Its is WebApp Optimization Technique where we combining multiple JavaScript, CSS, and sometimes even HTML 
//* files into one file to reduce the number of requests to the server.

//*Instead of your web browser making a separate request to download each individual JavaScript and CSS file, it needs to retrieve only a few bundles. This reduces the load on the web server and makes your website feel faster.

//*Client-side bundling happens on the user's web browser, not on the web server.

//- How Client-Side Bundling Works
//* : During development, you structure your code into separate files for better organization and use tools like Webpack to bundle them together.
//*Webpack intelligently combines your many code files into a few well-packaged bundles for the web browser to download.

//!2.Client-side Routing
//* A technique that allows your webapp to switch between different "pages" or views without requiring a full page reload from the server.
//*Creates the feeling of a single-page application (SPA), where transitions between sections of your app feel fast and seamless.

//- How Client-Side Routing Works
// Initial Page Load: Your web browser loads the basic structure of your web application (HTML, CSS, and core JavaScript) from the server.
// JavaScript Takes Over: A client-side routing library (often React Router, Vue Router, or similar) handles the logic of watching for URL changes in the address bar.
// Intercepting Navigation: When a user clicks on a link within your application, the routing library intercepts the default browser behavior that would cause a full page refresh.
// Updating Content: Instead of requesting a whole new page from the server, the JavaScript dynamically:
// Fetches only the necessary data needed for the new view.
// Updates the content of the page to display the new view.
// Modifies the URL in the address bar to reflect the change.



//~ <BrowserRouter></BrowserRouter> 
//* It's the core component that enables client-side routing in your React application.
//* It keeps track of the current location in the URL and lets you define the rules for how your UI should change based on navigation.
//*

//~ <Routes></Routes> 
//* this component manages a group of <Route> components.
//* It's responsible for determining which individual <Route> should be rendered based on the current URL.

//~ <Route path="/" element={<Component />} /> 
//* When this route is match when the URL in the address bar, the  React component will be rendered as the content of the page.

//` window.location.href = "" // full page reload not client-side routing
//` <a href="/dashboard">Dashboard</a> // full page reload not client-side routing

//-How to Navigate in Client-Side Routing?
//` useNavigation() // hook to navigate programmatically
//* use only inside <BrowserRouter> Component
//*navigate("/") // navigate to the root URL

//Same as navigate <Link to="/dashboard">Dashboard</Link> // navigate using Link Component


import { BrowserRouter ,Routes, Route,useNavigate } from 'react-router-dom'; //-client-side routing library


function App(){
    // const navigate = useNavigate(); //~useNavigation() only inside <BrowserRouter> 

    return(
      <>
          {/* <button onClick={()=>navigate("/")}>Landing</button> Component */}
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/" element={<Landing />} />
              </Routes>
          </BrowserRouter>   
          <Footer />
      </>
       
    )
  }



function Navbar(){
    const navigate = useNavigate();
    return (
      <>
          <button onClick={()=>navigate("/")}>Landing</button>
          <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
      </>
  
    )
  }  
function Dashboard(){
    return <h1>Dashboard</h1>
}
function Landing(){
    return( <h1>Landing</h1>)
}
    
function Footer(){
    return <h2>Footer</h2>
}











