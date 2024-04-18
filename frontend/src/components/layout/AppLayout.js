import { Outlet } from "react-router-dom";

import AppNavbar from "./navbar/AppNavbar";

const AppLayout = () => {
  return (
    <div className="flex">
      <AppNavbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
