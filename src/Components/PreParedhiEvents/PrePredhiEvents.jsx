import React from "react";
import { StyledContainer } from "./PrePredhiEvents.styled";
import { Card2 } from "../Cards/Card2";

const PrePredhiEvents = () => {
  const WorkshopData = [
    {
      TitleText: "Web Dev",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      TitleText: "Another Title",
      Description:
        "Another description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      TitleText: "Yet Another Title",
      Description:
        "Yet another description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <StyledContainer>
        {WorkshopData.map((data) => (
          <Card2
            key={data.TitleText}
            ImageLink={data.ImageLink}
            TitleText={data.TitleText}
            Description={data.Description}
          />
        ))}
      </StyledContainer>
    </>
  );
};

export default PrePredhiEvents;
