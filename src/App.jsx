import React from "react";

import Navbar from "./Components/NavBar/NavBar";

import { Hero } from "./Components/Hero/Hero";

import styled from "styled-components";

const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});

  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <>
      <StyledContainer>
        <Navbar />
        <Hero />
      </StyledContainer>
    </>
  );
}

export default App;
