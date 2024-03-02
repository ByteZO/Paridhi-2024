import React from "react";
import {
  Main,
  ImageBox,
  Title,
  SubText,
  BtnBox,
  Button,
  SeeMore,
  SubBox
} from "./Card2.styled";

export const Card2 = ({ ImageLink, TitleText, Description, link }) => {
  return (
    <>
      <Main to={link}>
        <ImageBox $ImageLink={ImageLink}></ImageBox>
        <Title>{TitleText}</Title>
        <SubBox>
          <SubText>{Description} </SubText>
          <SeeMore>See More</SeeMore>
        </SubBox>

        <BtnBox>
          <Button>Registrater Onspot</Button>
        </BtnBox>
      </Main>
    </>
  );
};
