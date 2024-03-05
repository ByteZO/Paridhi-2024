import React from "react";
import { StyledContainer } from "./WorkShop.styled";
import { Card2 } from "../Cards/Card2";

const WorkShop = () => {
  const WorkshopData = [
    {
      TitleText: "Web Dev",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
    {
      TitleText: "Another Title",
      Description:
        "Another description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      TitleText: "Yet Another Title",
      Description:
        "Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum necessitatibus vero inventore magni in voluptatibus quod nam facere enim iste aspernatur velit ut quisquam aut nobis temporibus, neque ipsa.",
      ImageLink:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default WorkShop;
