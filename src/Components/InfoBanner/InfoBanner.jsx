import React from "react";
import {
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
  Image = "https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

{
  /* <Banner>
  <BannerImage
    $Image={
      "https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ></BannerImage>
  <BannerInfo>
    <Title>coding crusade</Title>
    <RegFee>Registration Fee: 150</RegFee>
    <TeamSize>Team Size: 2</TeamSize>
    <Description>
      Open for all years. Competitive Programming Contest. <br />
      1. A participant can participate in the preliminary round only once.{" "}
      <br />
      2. Top participants from the preliminary rounds will advance to the final
      round. <br />
      3. The participant with the highest score and least time will be awarded{" "}
      <br /> 4. This will be a Proctored Competition.
    </Description>
    <RegisterBtn onClick={openGoogleInNewTab}>Rgister Now</RegisterBtn>
  </BannerInfo>
</Banner>; */
}

const InfoBanner = ({ title, fee, teamSize, Descriptions, Image }) => {
  const openGoogleInNewTab = () => {
    window.open("https://www.google.com");
  };

  return (
    <>
      <Banner>
        <BannerImage $Image={Image}></BannerImage>
        <BannerInfo>
          <Title>{title}</Title>
          <RegFee>Registration Fee: {fee}</RegFee>
          <TeamSize>Team Size: {teamSize}</TeamSize>
          <Description>{Descriptions}</Description>
          <RegisterBtn onClick={openGoogleInNewTab}>Rgister Now</RegisterBtn>
        </BannerInfo>
      </Banner>
    </>
  );
};

export default InfoBanner;
