import { Outlet } from "react-router-dom";
import Drawer from "../Components/Drawer";
import Footer from "../Components/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-72"><Drawer/></div>
        <div className="flex-auto"><Outlet/></div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default DashboardLayout;