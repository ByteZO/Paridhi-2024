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

  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 95%;
    width: 80%;
  }
  border: 2px solid white;
`;
export const BannerImage = styled.div`
  border: 2px solid white;
  background-image: url(${({ $Image }) => $Image});
  background-size: contain;
  background-position: center;
  height: 100%;
  width: 40%;
  @media (max-width: 1100px) {
    flex-direction: column;
    height: 20%;
    width: 100%;
  }
`;
export const BannerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 20px;
  border: 2px solid white;
  @media (max-width: 1100px) {
    height: 80%;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  text-align: center;
  @media (max-width: 1100px) {
    font-size: 50px;
  }
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
  font-size: larger;
  /* margin-bottom: 20px; */
  @media (max-width: 1100px) {
    font-size: large;
    margin-bottom: 0;
  }
`;

export const RegisterBtn = styled.button`
  display: inline-block;
  padding: 0.9em 3em;
  background-image: linear-gradient(
    -45deg,
    rgba(9, 28, 60, 1) 0%,
    rgba(67, 46, 143, 1) 100%
  );
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.2em;
  border-radius: 10em;
  color: white;
  width: 50%;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 40%;
    width: 80%;
    font-size: 15px;
    letter-spacing: 0.1em;
    padding: 0.56em 3em;
  }
`;
