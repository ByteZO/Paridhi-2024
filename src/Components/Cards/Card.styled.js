import styled from "styled-components";

export const Main = styled.div`
  z-index: 9;
  height: 400px;
  width: 300px;
  border-radius: 10%;
  padding: 10px;
  background: rgba(85, 82, 82, 0.4);
  box-shadow: 5px 5px 5px 5px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
`;
export const SubText = styled.div`
  height: 30%;
  width: 100%;
  color: wheat;
  padding: 5%;
  text-align: center;
`;
