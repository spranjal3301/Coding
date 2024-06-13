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

//`<Link to="/"></Link>
//*Same as useNavigation but in HTML tag  
//*Use for onClick navigate

//` <NavLink to="/about" exact activeClassName="active"></NavLink>
//* NavLink is a special type of Link that is specifically designed to provide additional styling and behavior 
//*to the active link. It helps indicate which route is currently active, making it useful for navigation menus.
//? activeClassName: The class to apply when the link is active.
//? exact: A boolean that, if set to true, will only apply the active class/style when the route is exactly matched.
//? ClassName={
  // ({isActive,isPending,isTransitioning})=>
    // { `${isActive}` }}


//!Routing M01
import { BrowserRouter ,Routes, Route,useNavigate,Outlet, Link } from 'react-router-dom'; //-client-side routing library

const routesComponents=[
  {path:'signup' ,component: "Signup"},
  { path: "/accordion", component: lazy(() => import('./Components/Accordion')) },
]

function App(){
    // const navigate = useNavigate(); //~useNavigation() only inside <BrowserRouter> 

    return(
      <>
          {/* <button onClick={()=>navigate("/")}>Landing</button> Component */}
          <BrowserRouter>
              <Navbar />
              <Routes>
                  {/*//` Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
                  <Route path="*" element={<NoPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/" element={<Landing />} />
              </Routes>
              <Footer />
          </BrowserRouter>   
      </>
       
    )
  }



//!Layout based
function App2() {

  return (
    <BrowserRouter>
    <Routes>
        {/*//! Parent route with a Layout component */}
       <Route path='/' element={<Layout />}>
            {/*//` Index route, acts as default child route */}  
            <Route index element={<Home />} />
            {/*//` Another child route for the About page */}
            <Route path='about' element={<About />} />
       </Route>
    </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
     <Navbar/>

     
      <Outlet />  {/*//- This is where nested routes will be rendered */}
      

      <Footer/>
    </div>
  );
}

function Navbar(){
  const navigate = useNavigate();
  
  return (
    <>
      <h1>My Website</h1>
      <nav>
        {/*//` useNavigate() */}
        <button onClick={()=>navigate("/")}>Home</button> //`M01`

        {/*//` Link */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>

        {/*//` NavLink */}
        <NavLink to="/" exact activeClassName="active" >
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </nav>
    </>
  )
}








