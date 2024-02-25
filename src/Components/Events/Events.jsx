import React from "react";
import { StyledContainer } from "./Events.styled";
import Card from "../Cards/Card";


const Events = () => {
  return (
    <>
      <StyledContainer>
        <Card
          TitleText="CODING"
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum."
          ImageLink="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300"
          link={`/events/coding`}
        />
      </StyledContainer>
    </>
  );
};

export default Events;
