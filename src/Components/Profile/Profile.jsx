import React from "react";
import {
  StyledContainer,
  Domains,
  MainInfo,
  CardsSection,
} from "./Profile.styled";

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

const userData = {
  id: testUserData.id,
  name: testUserData.name,
  college: testUserData.college,
  year: testUserData.year,
  department: testUserData.department,
  roll: testUserData.roll,
  email: testUserData.email,
  phoneNumber: testUserData.phoneNumber,
  gid: testUserData.gid,
};

const domainCivil = {
  "Mega Arch TID": testUserData.megaArchTid,
  "SetuBandhan TID": testUserData.setuBandhanTid,
  "TrackOteasure TID": testUserData.trackoteasureTid,
};

const domainCoding = {
  "CP  1styear TID": testUserData.cp1styearTid,
  "CP All year TID": testUserData.cp1styearTid,
  "WEB TID": testUserData.webTid,
};

const domainElectrical = {
  "Electrical-1 TID": testUserData.electrical1Tid,
  "Electrical-2 TID ": testUserData.electrical2Tid,
};

const domainRobotics = {
  "Roborace TID": testUserData.roboraceTid,
  "RoboSoccer TID": testUserData.roboSoccerTid,
  "RoboWar-8kg TID ": testUserData.roboWar8kgTid,
  "RoboWar-15kg TID": testUserData.roboWar15kgTid,
};

const domainGaming = {
  "Gaming-1 TID": null,
  "Gaming-2 TID": "paridhi12002105202024",
  "Gaming-3 TID ": "paridhi12002105202024",
};

function showCardHandler(obj) {
  for (let key in obj) {
    if (obj[key]) {
      return true;
    }
  }
  return false;
}

function showOptionsHandler(obj) {
  let elements = [];
  for (let key in obj) {
    if (obj[key] !== null) {
      elements.push(<h1 key={key}>{` ${key} : ${obj[key]}`}</h1>);
    }
  }
  return elements;
}

const Profile = () => {
  return (
    <>
      <StyledContainer>
        {userData ? (
          <>
            <MainInfo>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                alt="Profile Image"
                width="100"
                srcset="Profile Image "
                style={{ borderRadius: "50px", margin: "auto" }}
              />
              <h1>Name : {userData.name} </h1>
              <h1>GID : {userData.gid} </h1>
              <h1>Year : {userData.year}</h1>
              <h1>Department : {userData.department}</h1>
              <h1>Roll No. : {userData.roll}</h1>
              <h1>E - Mail : {userData.email}</h1>
              <h1>Phone : {userData.phoneNumber}</h1>
              <h1>College : {userData.college} </h1>
            </MainInfo>
          </>
        ) : (
          <h1>"YOU ARE NOT LOGGED IN !!!"</h1>
        )}
        {
          // the cards section
        }
        <CardsSection>
          {showCardHandler(domainCivil) ? (
            <Domains>
              <h1>Civil</h1>
              {showOptionsHandler(domainCivil).map((main) => main)}
            </Domains>
          ) : (
            <></>
          )}
          {showCardHandler(domainCoding) ? (
            <Domains>
              <h1>CODING</h1>
              {showOptionsHandler(domainCoding).map((main) => main)}
            </Domains>
          ) : (
            <></>
          )}
          {showCardHandler(domainElectrical) ? (
            <Domains>
              <h1>Electricl</h1>
              {showOptionsHandler(domainElectrical).map((main) => main)}
            </Domains>
          ) : (
            <></>
          )}
          {showCardHandler(domainRobotics) ? (
            <Domains>
              <h1>Robotics</h1>
              {showOptionsHandler(domainRobotics).map((main) => main)}
            </Domains>
          ) : (
            <></>
          )}
          {showCardHandler(domainGaming) ? (
            <Domains>
              <h1>GAMING</h1>
              {showOptionsHandler(domainGaming).map((main) => main)}
            </Domains>
          ) : (
            <></>
          )}
        </CardsSection>
      </StyledContainer>
    </>
  );
};

export default Profile;
