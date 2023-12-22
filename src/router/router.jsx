import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import AddTask from "../DPages/AddTask";
import Login from "../pages/Login";
import EditTask from "../DPages/EditTask";
import AllTask from "../DPages/AllTask";
import PrivateRoute from "./PrivateRoute";

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
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        index:true,
        element:<PrivateRoute><AllTask/></PrivateRoute>
      },
      {
        path:'add-task',
        element:<PrivateRoute><AddTask/></PrivateRoute>
      },
      {
        path:'edit-task/:id',
        element:<PrivateRoute><EditTask/></PrivateRoute>
      },
    ]
  }
]);

export default router;