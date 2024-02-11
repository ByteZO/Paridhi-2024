import styled from "styled-components";

export const Main = styled.div`
  height: 400px;
  width: 300px;
  border-radius: 10%;
  padding: 10px;
`;

export const ImageBox = styled.div`
  height: 50%;
  width: 100%;
  border-top-right-radius: 11%;
  border-top-left-radius: 11%;
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
`;
