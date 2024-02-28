import React from "react";
import { Outlet } from "react-router-dom";

import BackgroundAnimation from "../Components/BackGroundAnimation/BackgroundAnimation";
import Navbar from "../Components/NavBar/Navbar";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh; /* Adjust as per your layout needs */
  width: 100%;
`;

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Outlet /> {/* Render child routes */}
      {/* <div>
          <BackgroundAnimation />
        </div> */}
    </Main>
  );
};

export default Layout;
