import styled from "styled-components";

export const HeroMain = styled.div`
  height: 90vh;
  width: 100%;

  position: relative;
`;

export const HeroContain = styled.div`
  top: 15vh;
  height: 50%;
  width: 50%;
  position: absolute;
  right: 10vw;
`;

export const CountdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-radius: 10px;
  background-color: #fd2963;
  /* padding: 10px; */
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
