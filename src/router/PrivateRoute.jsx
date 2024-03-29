import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  // if(loading){
  //   return <p>Loading</p>
  // }
  if(user){
    return children;
  }
  return <Navigate state={ location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;