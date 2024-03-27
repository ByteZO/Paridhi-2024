import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  Main,
  ImageBox,
  Title,
  SubText,
  IdSec,
  InstituteInfoSec,
  RollYearSec,
} from "./Card3.styled";

export const Card3 = ({ name, department, tid, gid, college, roll, year }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const ImageLink =
    "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg";

  return (
    <>
      <Main>
        <ImageBox $ImageLink={ImageLink}></ImageBox>
        <Title>{name}</Title>

        <SubText>
          <IdSec>
            <h1> GID : {gid}</h1>
          </IdSec>
          <InstituteInfoSec>
            <h1>Department : CSE </h1>
            <h1>Roll No : {roll}</h1>
            <h1>E-mail : soumyadeep_d.cse2021@msit.edu.in </h1>
            <h1>Phone : 8282866698</h1>
          </InstituteInfoSec>
          <RollYearSec>
            <h1>Year : {year}</h1>
            <h1>College : {college}</h1>
          </RollYearSec>
        </SubText>
      </Main>
    </>
  );
};
