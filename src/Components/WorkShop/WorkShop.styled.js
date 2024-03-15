import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  padding-top: 10vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  text-align: center;
`;
export const SubText = styled.div`
  height: 25%;
  width: 100%;
  color: wheat;
  padding: 2%;
  text-align: center;
`;
