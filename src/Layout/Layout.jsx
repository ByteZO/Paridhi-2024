import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh; 
  width: 100%;
`;

const Layout = () => {
  return (
    <Main>
      <Navbar />
      <Outlet /> 
    </Main>
  );
};

export default Layout;
