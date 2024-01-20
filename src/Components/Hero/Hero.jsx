import React, { useState, useEffect } from "react";

import {
  HeroMain,
  HeroContain,
  CountdownBox,
  CountdownTimer,
  Headline,
  SubHeadline,
  Text,
} from "./Hero.styled";
export const Hero = () => {
  const headline = "PARIDHI 2024";
  const subheadline = "Tech Fest";
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis velit, magnam hic reiciendis nisi iste temporibus! Voluptatibus necessitatibus accusantium deserunt expedita assumenda. Doloremque iste atque cupiditate ullam, commodi nisi?";

  const countdownSeconds = 30;

  const [countdown, setCountdown] = useState(countdownSeconds);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown]);

  return (
    <HeroMain>
      <HeroContain>
        <Headline>
          <i>{headline}</i>
        </Headline>
        <SubHeadline>
          <i>{subheadline}</i>
        </SubHeadline>
        <Text>{text}</Text>
        <CountdownBox>
          <CountdownTimer>{countdown} seconds</CountdownTimer>
        </CountdownBox>
      </HeroContain>
    </HeroMain>
  );
};
