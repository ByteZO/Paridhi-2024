import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`

  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  z-index: 9;
  height: 400px;
  width: 300px;
  border-radius: 10%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  border-top-right-radius: 11%;
  border-top-left-radius: 11%;
  border-bottom-left-radius: 11%;
  border-bottom-right-radius: 11%;
  background-image: url(${({ $ImageLink }) => $ImageLink});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  display: grid;
  place-content: center;
  height: 20%;
  width: 100%;
  font-size: x-large;
  padding: 10%;
  color: wheat;
  transform-style: preserve-3d;
  transform: translateZ(200px);
`;
export const SubText = styled.div`
  height: 25%;
  width: 100%;
  color: wheat;
  padding: 2%;
  text-align: center;
`;
const glitchAnimation = keyframes`
  0%, 100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(5px, -5px);
  }
  60% {
    transform: translate(-5px, 5px);
  }
  80% {
    transform: translate(5px, -5px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.7); 
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
  }
`;

export const GlassButton = styled(Link)`
  padding: 10px;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${glitchAnimation} 0.1s infinite alternate,
    ${pulseAnimation} 2s infinite alternate; 

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) translateZ(10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    animation: none; 
  }

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
  }

  :hover::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
