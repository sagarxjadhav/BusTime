import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
// import Homepage from "./Homepage";
// import SignIn from "./SignIn";
import App from "./App";
import Timetable from "./Timetable";


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,

//     children: [
//           {path: "table",
//             element: <Timetable/>
//           },
//           {path: "signIn",
//             element: <SignIn/>
//           }
//         ]
//   }
// ]);

const router = createBrowserRouter([
  {
        path: '/',
        element: <App/>,
  },

  {
    path: 'table',
    element: <Timetable/>,
  }]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>


);
