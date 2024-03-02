import React from "react";
import { Outlet } from "react-router-dom";


import Navbar from "../Components/NavBar/Navbar";
import styled from "styled-components";
import Design from "../Components/Design/Design";

const Main = styled.main`
  height: 100vh; /* Adjust as per your layout needs */
  width: 100%;
`;

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Outlet /> {/* Render child routes */}

  
    </Main>
  );
};

export default Layout;
