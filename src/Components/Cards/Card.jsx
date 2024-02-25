import React, { useRef, useEffect } from "react";
import {
  Main,
  ImageBox,
  Title,
  SubText,
  GlassButton,
  StyledContainer,
} from "./Card.styled";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

{
  /* <Card
TitleText="CODING"
Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum."
ImageLink="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300"
/> */
}

const Card = ({ ImageLink, TitleText, Description, link }) => {
  return (
    <>
      <StyledContainer>
        <Tilt>
          <Main>
            <ImageBox $ImageLink={ImageLink}></ImageBox>
            <Title>{TitleText}</Title>
            <SubText>{Description}</SubText>
            <GlassButton to={link}>Events</GlassButton>
          </Main>
        </Tilt>
      </StyledContainer>
    </>
  );
};

export default Card;
