import React from "react";
import {
  Main,
  Banner,
  BannerImage,
  BannerInfo,
  Title,
  RegFee,
  TeamSize,
  Description,
  RegisterBtn,
} from "./InfoBanner.styled";

// Example InfoBanner

{
  /* <InfoBanner
  title={"coding crusade"}
  fee={150}
  teamSize={2}
  Descriptions={`
    Open for all years. Competitive Programming Contest. <br />1. A
    participant can participate in the preliminary round only once. <br />2.
    Top participants from the preliminary rounds will advance to the
    final round. <br />3. The participant with the highest score and least
    time will be awarded <br /> 4. This will be a Proctored Competition.
`}
/>; */
}

const InfoBanner = ({ title, fee, teamSize, Descriptions, Image }) => {
  const openGoogleInNewTab = () => {
    window.open("https://www.google.com", "_blank");
  };
  return (
    <>
      <Main>
        <Banner>
          <BannerImage></BannerImage>
          <BannerInfo>
            <Title>coding crusade</Title>
            <hr />
            <RegFee>Registration Fee: 150</RegFee>
            <TeamSize>Team Size: 2</TeamSize>
            <hr />
            <Description>
              {/* {Descriptions} */}
              Open for all years. Competitive Programming Contest. <br />
              1. A participant can participate in the preliminary round only
              once. <br />
              2. Top participants from the preliminary rounds will advance to
              the final round. <br />
              3. The participant with the highest score and least time will be
              awarded <br /> 4. This will be a Proctored Competition.
            </Description>

            <RegisterBtn onClick={openGoogleInNewTab}>Rgister Now</RegisterBtn>
          </BannerInfo>
        </Banner>
      </Main>
    </>
  );
};

export default InfoBanner;
