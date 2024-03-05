import React, { useState, useEffect } from "react";
import { Main, ImageBox, Title, SubText, BtnBox, Button } from "./Card2.styled";

export const Card2 = ({ ImageLink, TitleText, Description, link }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const openNewTab = () => {
    window.open("https://www.google.com");
  };

  return (
    <>
      <Main
        $height={isClicked ? 500 : 400}
        $clicked={isClicked ? 560 : 331}
        to={link}
      >
        <ImageBox $ImageLink={ImageLink}></ImageBox>
        <Title>{TitleText}</Title>

        <SubText
          $height={isClicked ? "unset" : "2"}
          onClick={handleClick}
          $clicked={isClicked ? "unset" : "1"}
        >
          {Description}
        </SubText>

        <BtnBox>
          <Button onClick={openNewTab}>Register Onspot</Button>
        </BtnBox>
      </Main>
    </>
  );
};
