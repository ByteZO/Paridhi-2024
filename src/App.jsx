import React from "react";
import styled from "styled-components";

import Navbar from "./Components/NavBar/Navbar";

import Hero from "./Components/Hero/Hero";

import BackgroundAnimation from "./Components/BackGroundAnimation/BackgroundAnimation";

const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});

  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;

`;


function App() {
  return (
    <>
      <StyledContainer>
        <Navbar />
        <Hero />
        <div>
          <BackgroundAnimation />
        </div>
      </StyledContainer>
    </>
  );
}

export default App;
