import { Link } from "react-router-dom";
import styled from "styled-components";



export const Main = styled.div`
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
  margin: 40px;
  @media (max-width: 600px) {
    height: 331px;
    width: 225px;
  }
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
  height: 15%;
  width: 100%;
  font-size: x-large;
  padding: 2%;
  color: wheat;
  transform-style: preserve-3d;
  transform: translateZ(200px);
  text-align: center;
`;

export const SubBox = styled.section`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: end;
`;
export const SubText = styled.p`
  width: 100%;
  color: wheat;
  /* padding: 2%; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-align: center;
`;
export const SeeMore = styled.span`
  width: 20px;
  font-size: 20px;
`;

export const BtnBox = styled.section`
  border: 1px solid transparent;
  /* padding: 0.6em 1.2em; */
  font-size: 1em;
  font-weight: 500;

  /* margin-top: 70px; */
  height: 17%;
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
