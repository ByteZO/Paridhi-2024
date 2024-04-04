import React, { useRef, useEffect } from "react";
import {
  Main,
  ImageBox,
  Title,
  SubText,
  StyledContainer,
} from "./Card.styled";
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
 
          <Main to={link}>
            <ImageBox $ImageLink={ImageLink}></ImageBox>
            <Title>{TitleText}</Title>
            <SubText>{Description}</SubText>
          </Main>
      
      </StyledContainer>
    </>
  );
};

export default Card;
