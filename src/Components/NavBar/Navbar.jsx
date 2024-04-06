import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuBtn,
  NavList,
  NavItem,
  NavLinkName,
  StyledContainer,
  SubLogo,
} from "./Navbar.styled";

import megalogo from "../../assets/Images/megaLogo.png";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyledContainer>
      <NavbarContainer>
        <Logo to="/">
          <SubLogo src={megalogo} />
        </Logo>
        <MenuBtn onClick={handleClick}>
          {isClicked ? (
            <i className="ri-close-large-fill"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </MenuBtn>
        <NavList $clicked={isClicked}>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="profile"
              onClick={handleClick}
            >
              Profile
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
                borderBottom: isActive ? "#ff0000" : "",
              })}
              to="events"
              onClick={handleClick}
            >
              Events
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="workshop"
              onClick={handleClick}
            >
              Workshop
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="pre_paredhi_events"
              onClick={handleClick}
            >
              PreEvents-Paredhi
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="sponsors"
              onClick={handleClick}
            >
              Sponsors
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="our_team"
              onClick={handleClick}
            >
              Our Team
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: "4px 4px 5px #ff0000",
                color: "#ff0000",
              })}
              to=""
              onClick={handleClick}
            >
              Sign Up
            </NavLinkName>
          </NavItem>
        </NavList>
      </NavbarContainer>
    </StyledContainer>
  );
};

export default Navbar;
