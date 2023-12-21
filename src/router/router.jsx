import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AddTask from "../DPages/AddTask";
import Login from "../pages/Login";
import EditTask from "../DPages/EditTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },

    ]
  },{
    path:"dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:'add-task',
        element:<AddTask/>
      },
      {
        path:'edit-task/:id',
        element:<EditTask/>
      },
    ]
  }
]);

export default router;