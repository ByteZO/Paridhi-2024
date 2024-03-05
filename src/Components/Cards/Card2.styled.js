import { Link } from "react-router-dom";

import styled from "styled-components";

export const Main = styled.div`
  height: ${({ $height }) => $height}px;
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
  margin: 40px;
  transition: height 0.2s ease;
  @media (max-width: 600px) {
    height: ${({ $clicked }) => $clicked}px;
    width: 225px;
  }
`;

export const ImageBox = styled.div`
  height: 200px;
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
  height: 60px;
  width: 100%;
  font-size: x-large;
  padding: 2%;
  color: white;
  transform-style: preserve-3d;
  transform: translateZ(200px);
  text-align: center;
`;

export const SubText = styled.p`
  cursor: pointer;
  width: 100%;
  color: white;
  display: -webkit-box;

  -webkit-line-clamp: ${({ $height }) => $height};
  transition: -webkit-line-clamp 0.3s ease;

  /* margin-top: 100px; */
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-align: center;
  @media (max-width: 600px) {
    -webkit-line-clamp: ${({ $clicked }) => $clicked};
  }
`;

export const BtnBox = styled.section`
  border: 1px solid transparent;
  /* padding: 0.6em 1.2em; */
  font-size: 1em;
  font-weight: 500;

  /* margin-top: 70px; */
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 70%;
  width: 70%;
  font-family: inherit;
  background-color: #1a1a1a;

  border-radius: 10px;
  background-color: #11172b;
  color: white;
  text-decoration: none;

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
