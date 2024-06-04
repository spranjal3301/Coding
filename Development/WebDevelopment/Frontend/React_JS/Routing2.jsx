//!Routing M02 old way


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter,useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "user/:id",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/*//- This is where nested routes will be rendered */}
      <Footer />
    </div>
  );
}


function User(){
  const {id}=useParams();

  return <h1>User</h1>
}
