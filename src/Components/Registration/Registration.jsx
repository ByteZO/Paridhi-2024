import React from "react";
import { Main } from "./Registration.styled";
import { useParams } from "react-router-dom";
import InfoBanner from "../InfoBanner/InfoBanner";
export const Registration = () => {
  const { EvnetRegistration } = useParams();
  const DomainEvents = {
    WebDevelopment: {
      Image:
        "https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Coding Crusade",
      teamSize: 3,
      fee: 200,
      Descriptions: `Open for all years. Competitive Programming Contest. <br />1. A participant can participate in the preliminary round only once. <br />2. Top participants from the preliminary rounds will advance to the final round. <br />3. The participant with the highest score and least time will be awarded <br /> 4. This will be a Proctored Competition.`,
    },
    UIUXDesign: {
      Image:
        "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "UI/UX Design Challenge",
      teamSize: 2,
      fee: 100,
      Descriptions: `Open for all years. UI/UX Design Challenge. <br />1. Participants must submit their designs before the deadline. <br />2. Top designs will be showcased at the event. <br />3. Winners will be chosen based on creativity and usability.`,
    },
    MobileAppDevelopment: {
      Image:
        "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mobile App Development Hackathon",
      teamSize: 4,
      fee: 250,
      Descriptions: `Open for all years. Mobile App Development Hackathon. <br />1. Participants must form teams of 4. <br />2. Participants will have 24 hours to develop a mobile app. <br />3. Judges will evaluate apps based on functionality, design, and innovation.`,
    },
    DataScience: {
      Image:
        "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Data Science Challenge",
      teamSize: 2,
      fee: 150,
      Descriptions: `Open for all years. Data Science Challenge. <br />1. Participants must analyze a given dataset and provide insights. <br />2. Top performers will present their findings at the event. <br />3. Winners will be chosen based on the accuracy and relevance of their analysis.`,
    },
    CyberSecurity: {
      Image:
        "https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cybersecurity Capture the Flag",
      teamSize: 5,
      fee: 300,
      Descriptions: `Open for all years. Cybersecurity Capture the Flag. <br />1. Participants must form teams of 5. <br />2. Teams will compete in various cybersecurity challenges. <br />3. The team with the most flags captured wins.`,
    },
  };

  const data = DomainEvents[EvnetRegistration];

  return (
    <>
      <Main>
        {data && (
          <InfoBanner
            key={data.title}
            Image={data.Image}
            title={data.title}
            fee={data.fee}
            Descriptions={data.Descriptions}
          />
        )}
      </Main>
    </>
  );
};
