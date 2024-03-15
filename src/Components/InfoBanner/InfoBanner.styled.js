import styled from "styled-components";

export const Banner = styled.section`
  height: 70%;
  width: 90%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 95%;
    width: 80%;
  }
  border: 2px solid white;
  border-radius: 30px;
`;
export const BannerImage = styled.div`
  background-image: url(${({ $Image }) => $Image});
  background-size: contain;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  background-position: center;
  height: 100%;
  width: 40%;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 30%;
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
  }
`;
export const BannerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  /* gap: 15px; */
  height: 100%;
  width: 100%;
  padding: 30px 30px 30px 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border: 2px solid white;
  @media (max-width: 600px) {
    height: 80%;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 30px;
    /* gap: 20px; */
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const RegFee = styled.h2`
  font-weight: bolder;

  color: wheat;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const TeamSize = styled.h3`
  font-weight: bolder;

  color: white;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const Description = styled.h5`
  color: white;
  font-size: larger;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: small;
    margin-bottom: 10px;
  }
`;

export const ButtonSection = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const RegisterBtn = styled.button`
  height: 100%;
  width: 40%;
  font-family: inherit;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: #11172b;
  color: white;
  text-decoration: none;

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 72%;
    width: 80%;
    font-size: 15px;
    letter-spacing: 0.1em;
    padding: 0.56em;
  }
`;
