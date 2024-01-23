import styled from "styled-components";

export const HeroMain = styled.div`
  height: 90vh;
  width: 100vw;
  position: relative;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroContain = styled.div`
  top: 15%;
  height: 50%;
  width: 50%;
  position: absolute;
  right: 10%;
  @media (max-width: 600px) {
    top: 0;
    right: 0;
  }
`;

export const CountdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #fd2963;

  height: 50px;
  width: 200px;
  text-align: center;
`;

export const CountdownTimer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const Headline = styled.h2`
  font-weight: bold;
  font-size: 60px;
  color: #fff;
`;

export const SubHeadline = styled.h2`
  font-weight: bold;
  font-size: 60px;
  color: #fd2963;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;
