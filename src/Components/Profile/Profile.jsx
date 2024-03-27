import React from "react";
import { StyledContainer, Domains, MainInfo } from "./Profile.styled";
import { Card3 } from "../Cards/Card3";

const testUserData = {
  id: 3,
  name: "soumya dey",
  college: "msit",
  year: "3rd",
  department: "cse",
  roll: "115",
  email: "soumyadeep_d.cse2021@msit.edu.in",
  phoneNumber: "8282866698",
  gid: "paridhi2000021020521024",
  megaArchTid: "paridhi12002105202024",
  setuBandhanTid: "paridhi12002105202024",
  cp1styearTid: "paridhi12002105202024",
  cpAllyearTid: "paridhi12002105202024",
  webTid: "paridhi12002105202024",
  electrical1Tid: "paridhi12002105202024",
  electrical2Tid: "paridhi12002105202024",
  gaming1Tid: "paridhi12002105202024",
  gaming2Tid: "paridhi12002105202024",
  gaming3Tid: "paridhi12002105202024",
  roboraceTid: "paridhi12002105202024",
  roboSoccerTid: "paridhi12002105202024",
  roboWar8kgTid: "paridhi12002105202024",
  roboWar15kgTid: "paridhi12002105202024",
  lfrtid: "paridhi12002105202024",
  trackoteasureTid: "paridhi12002105202024",
};

const userData = [
  {
    name: "soumya dey",
    gID: "paridhi2000021020521024",
    rollNo: 115,
    department: "cse",
    year: "3rd",
    college: "Meghnad Saha Institute Of Technology",
  },
];



const Profile = () => {
  return (
    <>
      <StyledContainer>
        <MainInfo>
          <h1>Name : soumya dey </h1>
          <h1>GID : paridhi2000021020521024 </h1>
          <h1>Year : 3rd</h1>
          <h1>Department : CSE </h1>
          <h1>Roll No. : 155</h1>
          <h1>E - Mail : soumyadeep_d.cse2021@msit.edu.in</h1>
          <h1>Phone : 8282866698</h1>
          <h1>College : msit </h1>
        </MainInfo>
        <Domains> 
          <h1>CIVIL</h1>
          <br />
          <h1>Mega Arch TID : paridhi12002105202024</h1>
          <h1>Setu Bandhan TID : paridhi12002105202024</h1>
        </Domains>
        <Domains> 
          <h1>CODING</h1>
          <br />
          <h1>CP 1st Year TID : paridhi12002105202024</h1>
          <h1>CP All Year TID : paridhi12002105202024</h1>
          <h1>WEB TID : paridhi12002105202024</h1>
        </Domains>
      </StyledContainer>
    </>
  );
};

export default Profile;
