import React from "react";
import { StyledContainer } from "./Events.styled";
import Card from "../Cards/Card";

const Events = () => {
  const eventDataArray = [
    {
      TitleText: "CODING",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300",
      link: "/events/coding",
    },
    {
      TitleText: "WORKSHOP",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg",

      link: "events/workshop",
    },
    {
      TitleText: "SEMINAR",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg",

      link: "/events/seminar",
    },
    {
      TitleText: "HACKATHON",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",

      link: "/events/hackathon",
    },
    {
      TitleText: "CONFERENCE",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
      ImageLink:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",

      link: "/events/conference",
    },
  ];

  return (
    <>
      <StyledContainer>
        {eventDataArray.map((data) => {
          console.log(data.link);
          return (
            <Card
              key={data.TitleText}
              link={data.link}
              ImageLink={data.ImageLink}
              TitleText={data.TitleText}
              Description={data.Description}
            />
          );
        })}
      </StyledContainer>
    </>
  );
};

export default Events;
