import React from "react";
import { Main } from "./DomainEvents.styled";
import { useParams } from "react-router-dom";
import Card from "../../Cards/Card";

const DomainEvents = () => {
  const { Domain } = useParams();
  const Domains = {
    coding: [
      {
        TitleText: "Web Development",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro tempore laborum.",
        ImageLink:
          "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/coding/WebDevelopment",
      },

      {
        TitleText: "Graphic Design ",
        Description:
          "Join us for a hands-on workshop exploring the fundamentals of graphic design.",
        ImageLink:
          "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/design/UIUXDesign",
      },

      {
        TitleText: "Robotics Competition",
        Description:
          "Compete with teams from around the world in this thrilling robotics competition.",
        ImageLink:
          "https://images.unsplash.com/photo-1523329110005-297cf111f8de?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/robotics/MobileAppDevelopment",
      },

      {
        TitleText: "Digital Marketing Seminar",
        Description:
          "Learn the latest strategies and techniques in digital marketing from industry experts.",
        ImageLink:
          "https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/marketing/DataScience",
      },

      {
        TitleText: "Startup Pitch Competition",
        Description:
          "Pitch your startup idea to a panel of investors and industry professionals.",
        ImageLink:
          "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/events/entrepreneurship/CyberSecurity",
      },
    ],
  };

  return (
    <>
      <Main>
        {Domains[Domain] &&
          Domains[Domain].map((data) => (
            <Card
              key={data.TitleText}
              TitleText={data.TitleText}
              Description={data.Description}
              ImageLink={data.ImageLink}
              link={data.link}
            />
          ))}
      </Main>
    </>
  );
};

export default DomainEvents;
