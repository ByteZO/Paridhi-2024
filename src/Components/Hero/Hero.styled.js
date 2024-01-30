import styled, { keyframes } from "styled-components";

export const HeroMain = styled.div`
  height: 90vh;
  width: 100vw;
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

export const HeroText = styled.div`
  font-size: large;
  text-align: center;
  @media (max-width: 600px) {
    font-weight: 800;
    padding: 3%;
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
  /* animation: ${dripAnimation} 1s ease-in-out infinite; */
`;
