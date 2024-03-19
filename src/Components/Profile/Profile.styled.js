import styled from "styled-components";

export const StyledContainer = styled.section`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});
  background-size: cover;
  background-position: center;
  padding-top: 10vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Main = styled.section`
  height: 85%;
  width: 90%;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10% 0;
  color: white;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 20px;
  border: 3px solid whitesmoke;

  @media (max-width: 600px) {
 text-align: center;
    gap: 9% 0;
  }
`;
export const ProImg = styled.section`
  width: 10rem;

  height: 10rem;
  border-radius: 50%;
  background-image: url(${({ $Image }) => $Image});
  background-position: center;
  background-size: contain;
  @media (max-width: 600px) {
    width: 5rem;
    height: 5rem;
  }
`;
export const NameSec = styled.h1`
  font-size: x-large;
  letter-spacing: 5px;
  color: white;
  border: 10px;
  @media (max-width: 600px) {
    letter-spacing: 2px;
    font-size: large;
  }
`;
export const IdSec = styled.section`
  color: white;
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20%;
  flex-wrap: wrap;
  font-size: x-large;

  @media (max-width: 600px) {
  
    gap: 10%;
    font-size: large;
  
  
  }
`;
export const InstituteInfoSec = styled.section`
  height: 10%;
  width: 100%;
  font-size: x-large;
  flex-wrap: wrap;
  display: flex;
  border: 10px;

  justify-content: center;
  @media (max-width: 600px) {
    font-size: large;
  }
`;
export const RollYearSec = styled.section`
  color: white;
  display: flex;
  height: 10%;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25%;
  border: 10px;

  font-size: x-large;
  @media (max-width: 600px) {
    font-size: large;
    gap:  0 15%;

  }
`;
