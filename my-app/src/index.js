// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
  
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Analysis from './Pages/Analysis';
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar";
import Tracking from './Pages/Tracking';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/", element: <Home/>
  },
  {
    path: "/Analysis", element: <Analysis/>
  },
  {
    path: "/Tracking", element: <Tracking/>
  },
  {
    path: "/Profile", element: <Profile/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
<RouterProvider router={router} />
</div>
  
);