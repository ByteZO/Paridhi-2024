import React from "react";
import Card from "../../Cards/Card";
import { StyledContainer } from "./Coding.styled";

const Coding = () => {
  return (
    <>
      <StyledContainer>
        <Card
          TitleText="Web Development"
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum."
          ImageLink="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300"
          link={`/events/coding/web_dev`}
        />  
      </StyledContainer>
    </>
  );
};

export default Coding;
