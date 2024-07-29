//! Authentication using cookies
//` What are cookies?
//* Cookies are small pieces of data that are stored in the user's browser.
//* They are used to store information about the user's session, such as their login status, shopping cart contents, and other preferences.
//* Cookies are sent to the server with each request, allowing the server to identify the user and provide a personalized experience.

// Session Management:
// Personalization: 
// Tracking: 
// Security: 


//` Types of cookies
//? Persistent - Stay even if u close the window
//? Session - Go away after the window closes
//? Secure - Sent only over secure, encrypted connections (HTTPS).

//` Properties of cookies
//? HttpOnly - Can not be accessed by client side scripts
//? SameSite - Ensures cookies are not send on cross origin requests
//? Domains - You can also specify what all domains should the cookie be sent from

//` CSRF attacks:
//* Cross site request forgery attacks were super common because of cookies and hence the SameSite attribute was introduced  .

//` SameSite attribute:
//? None: No restrictions on cross-origin requests
//? Strict: No cookies will be sent on cross-origin requests(Same site only not same Domain *.example.com)  
        // if third party site is making a request to your site, the cookies will not be sent 
        // Problem: third party is redirecting to your site then the cookies will not be sent.
//- Lax - Only GET requests and on top level navigation not allow POST(solve the problem with Strict)



//` How to set a cookie in Express.js?
//? npm install cookie-parser
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
// res.cookie("cookieName", "cookieValue"); //? Set a cookie
// req.cookies.cookieName; //? Access the cookie
// res.clearCookie("cookieName"); //? Clear the cookie

//? backend
app.use(cors({
        credentials: true,
        origin: "http://localhost:5173"
    }));
//? frontend
 axios.get(`${BACKEND_URL}/user`, {
        withCredentials: true,
      })


