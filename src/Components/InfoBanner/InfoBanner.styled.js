import styled from "styled-components";

export const Main = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
export const Banner = styled.section`
  height: 55%;
  width: 80%;
  border: 2px solid black;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const BannerImage = styled.div`
  border: 2px solid white;
  background-image: url("https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300");
  background-size: contain;
  object-fit: cover;
  background-position: center;
  height: 100%;
  width: 30%;
`;
export const BannerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100%;
  width: 80%;
  border: 2px solid white;
  padding: 10px;
`;
export const Title = styled.h1`
  color: white;
  font-weight: bolder;
  font-size: 50px;
`;
export const RegFee = styled.h2`
  font-weight: bolder;

  color: wheat;
`;
export const TeamSize = styled.h3`
  font-weight: bolder;

  color: white;
`;
export const Description = styled.h5`
  color: white;
`;

export const RegisterBtn = styled.button`
  display: inline-block;
  padding: .9em 3em;
  background-image: linear-gradient(
    -45deg,
    rgba(9, 28, 60, 1) 0%,
    rgba(67, 46, 103, 1) 100%
  );
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.2em;
  border-radius: 10em;
  color: white;
  width: 50%;

`;
