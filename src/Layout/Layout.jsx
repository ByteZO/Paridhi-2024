import React from "react";
import { Outlet } from "react-router-dom";

import BackgroundAnimation from "../Components/BackGroundAnimation/BackgroundAnimation";
import Navbar from "../Components/NavBar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <div>
        <BackgroundAnimation />
      </div>
    </>
  );
};

export default Layout;
