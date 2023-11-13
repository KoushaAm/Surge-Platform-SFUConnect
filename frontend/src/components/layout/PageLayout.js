import { Outlet } from "react-router-dom";

import PageNavbar from "./navbar/PageNavbar";

const PageLayout = () => {
    return (
      <div>
        <PageNavbar />
        <Outlet />
      </div>
    );
};

export default PageLayout;
