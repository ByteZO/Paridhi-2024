import styled from "styled-components";

export const StyledContainer = styled.section`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  padding-top: 15vh;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  @media (max-width: 1221px) {
    flex-direction: column;
  }
`;

export const MainInfo = styled.div`
  padding: 20px;
  height: 30%;
  min-width: 35%;
  font-size: 10px;
  border: 2px solid white;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const CardsSection = styled.section`
  min-width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 400px) {
    width: 100%;
    gap: 10px;
  }
`;

export const Domains = styled.h1`
  padding: 20px;
  min-height: 200px;
  width: 48%;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
 

  font-size: 14px;
  @media (max-width: 400px) {
    padding: 10px;
    font-size: 13px;
    width: 70%;
    height: auto;
  }
`;
