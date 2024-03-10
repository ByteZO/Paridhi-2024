import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
`;

export const HeroMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroContainer = styled.div`
  height: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 0 10% 0;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

const glitchAnimation = keyframes`
  0% {
    text-shadow: .05em 0 0 rgba(255, 0, 0, .75),
                -.05em -.025em 0 rgba(0, 255, 0, .75),
                .025em .05em 0 rgba(0, 0, 255, .75);
  }
  14% {
    text-shadow: .05em 0 0 rgba(255, 0, 0, .75),
                -.05em -.025em 0 rgba(0, 255, 0, .75),
                .025em .05em 0 rgba(0, 0, 255, .75);
  }
  15% {
    text-shadow: -.05em -.025em 0 rgba(255, 0, 0, .75),
                .025em .025em 0 rgba(0, 255, 0, .75),
                -.05em -.05em 0 rgba(0, 0, 255, .75);
  }
  49% {
    text-shadow: -.05em -.025em 0 rgba(255, 0, 0, .75),
                .025em .025em 0 rgba(0, 255, 0, .75),
                -.05em -.05em 0 rgba(0, 0, 255, .75);
  }
  50% {
    text-shadow: .025em .05em 0 rgba(255, 0, 0, .75),
                .05em 0 0 rgba(0, 255, 0, .75),
                 0 -.05em 0 rgba(0, 0, 255, .75);
  }
  99% {
    text-shadow: .025em .05em 0 rgba(255, 0, 0, .75),
                .05em 0 0 rgba(0, 255, 0, .75),
                 0 -.05em 0 rgba(0, 0, 255, .75);
  }
  100% {
    text-shadow: -.025em 0 0 rgba(255, 0, 0, .75),
                -.025em -.025em 0 rgba(0, 255, 0, .75),
                -.025em -.05em 0 rgba(0, 0, 255, .75);
  }
`;

export const HeroText = styled.div`
  font-size: large;
  text-align: center;
  @media (max-width: 600px) {
    font-weight: 800;
    padding: 3%;
  }
`;

export const Typewriter = styled.div`
  font-size: 100%;
  text-shadow: 0 0 18px white;
  position: relative;
  margin: 0;
  color: white;
  font-size: 6rem;
  font-weight: 900;
  position: relative;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: ${glitchAnimation} 625ms infinite;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    letter-spacing: 0.025em;
    top: 0;
    left: 0;
    opacity: 0.7;
  }

  &::before {
    animation: ${glitchAnimation} 675ms infinite;
    transform: translate(-0.035em, -0.025em);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }

  &::after {
    animation: ${glitchAnimation} 333ms infinite;
    transform: translate(0.035em, 0.025em);
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  }

  @media (max-width: 600px) {
    font-size: 3.9rem;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  font-family: "Arial", sans-serif;
  text-align: center;
  margin-top: 50px;
  width: 100%;
  height: 30%;
  @media (max-width: 600px) {
    gap: 2%;
  }
`;

export const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 30%;
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const CountText = styled.div`
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 10px;
    font-weight: 800;
  }
`;

const dripAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(20%);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const DrippingDigit = styled.div`
  background-color: black;
  text-align: center;
  font-size: 6vw;
  font-weight: 400;
  margin: 0 2.5%;
  color: white;
  padding: 20px;
  width: 65%;
  border-radius: 20px;
  border-width: 50px;
  box-sizing: border-box;
  box-shadow: 0 0.5rem 0.4rem 0.01rem hsl(70, 0%, 19%);
`;

export const effect = keyframes`
  0% {
    left: -110%;
    top: 90%;
    background: #54d6d6;
  }
  50% {
 
    background: #00f7ffc5;
  }
  90% {
  
    background: #00f7ffc5;
  }
  100%{
  
    background: transparent;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2%;
`;

export const Middle = styled.div`
  top: 50%;
  transform: translateY(13%);
  width: 100%;
  text-align: center;
  display: flex;
  @media (max-width: 600px) {
    transform: translate(-3%);
  }
`;

export const Btn = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  display: flex;
  background-color: transparent;
  margin: 1rem;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #00ccff;
  overflow: hidden;
  position: relative;
  text-decoration: none;

  &:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  &:before {
    content: "";
    position: absolute;
    width: 170%;
    height: 20%;
    transform: rotate(45deg);
    left: 100%;
    top: 90%;
  }

  &:hover::before {
    animation: ${effect} 0.3s 1;
    top: -10%;
    left: -10%;
  }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 20px;
  padding: 10px;
`;
