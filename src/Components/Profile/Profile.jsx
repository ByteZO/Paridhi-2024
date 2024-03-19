import React from "react";
import {
  StyledContainer,
  Main,
  ProImg,
  NameSec,
  IdSec,
  RollYearSec,
  InstituteInfoSec,
} from "./Profile.styled";

const userData = {
  profileImage:
    "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
  name: "Gopaljeet Narayan Yadav",
  GID: 34563456345645,
  TID: 23123123123123,
  rollNo: 31001222086,
  Year: 2,
  college: " Meghnad Saha Institute Of Technology",
};

const Profile = () => {
  return (
    <>
      <StyledContainer>
        <Main>
          <ProImg $Image={userData.profileImage} />
          <NameSec>{userData.name}</NameSec>
          <IdSec>
            <h1> TID : {userData.TID}</h1>
            <h1> GID : {userData.GID}</h1>
          </IdSec>
          <InstituteInfoSec>
            <h1>College : {userData.college}</h1>
          </InstituteInfoSec>
          <RollYearSec>
            <h1>Roll No : {userData.rollNo}</h1>
            <h1>Year : {userData.Year}</h1>
          </RollYearSec>
        </Main>
      </StyledContainer>
    </>
  );
};

export default Profile;
