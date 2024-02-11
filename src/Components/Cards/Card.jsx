import React, { useRef, useEffect } from "react";
import { Main, ImageBox, Title, SubText } from "./Card.styled";
import VanillaTilt from "vanilla-tilt";

const Card = ({ ImageLink, TitleText, Description }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        gyroscope: false,
      });

      // Clean up function to remove event listeners when the component unmounts
      return () => {
        tiltRef.current.vanillaTilt.destroy();
      };
    }
  }, []);

  return (
    <>
     
   
        <Main ref={tiltRef}>
          <ImageBox $ImageLink={ImageLink}></ImageBox>

          <Title>{TitleText}</Title>
          <SubText>{Description}</SubText>
        </Main>
 
    </>
  );
};

export default Card;
