import { Link } from "react-router-dom";

import styled from "styled-components";
export const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;

  min-height: 100;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  height: ${({ $height }) => $height}px;
  width: auto;
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
  height: 100px;
  width: 100px;
  border-radius: 50%;
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
  height: auto;
  gap: 100px;
  overflow: hidden;
  padding-left: 5%;
  @media (max-width: 600px) {
  }
`;

export const IdSec = styled.div`
  width: 100%;
  height: 20%;
`;
export const InstituteInfoSec = styled.div`
  width: 100%;
  height: 20%;
`;
export const RollYearSec = styled.div`
  width: 100%;
  height: 20%;
`;
