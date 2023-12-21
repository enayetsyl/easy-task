import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-auto">
      <Outlet/>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default DashboardLayout;