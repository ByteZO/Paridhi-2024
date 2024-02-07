import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, Card,  GlobalStyles } from "./Events.styled";

const Events = () => {
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <GlobalStyles>
          {" "}
          <Card>
            <img src={"https://images.unsplash.com/photo-1706859450156-0214dca4260d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Sample image" />

            <div>
              <div>
                <p>
    
                  <br />
                  <span>Mar 14</span>
                </p>

              </div>
              <p>Here is a custom status with some text and stuff...</p>
             
            </div>
          </Card>
        </GlobalStyles>
      </ThemeProvider>
    </>
  );
};

export default Events;
