import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Tilt from "react-parallax-tilt";

export const StyledContainer = styled(Tilt)`
  height: 400px;
  width: 300px;
  cursor: pointer;
  margin: 40px;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
`;

export const Main = styled(Link)`
  z-index: 1;
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
  text-decoration: none;
  @media (max-width: 600px) {
    height: 331px;
    width: 225px;
  }
`;

export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 11%;
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
  color: white  ;
  transform-style: preserve-3d;
  transform: translateZ(200px);
  text-align: center;
`;
export const SubText = styled.div`
  height: 25%;
  width: 100%;
  color: white;
  padding: 2%;
  text-align: center;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  border-radius: 10px;
  background-color: #11172b;
  color: white;
`;
