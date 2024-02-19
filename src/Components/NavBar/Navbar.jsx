import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuBtn,
  NavList,
  NavItem,
  NavLinkName,
  StyledContainer,
} from "./Navbar.styled";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyledContainer>
      <NavbarContainer>
        <Logo>
          Paridhi
        </Logo>

        <MenuBtn onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </MenuBtn>
        <NavList $clicked={isClicked}>
          <NavItem>
            <NavLinkName to="events">Events</NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName to="workshop">Workshop</NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName to="pre_paredhi_events">
              Pre-Paredhi-Events
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName to="sponsors">Sponsors</NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName to="our_team">Our Team</NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName to="">Sign Up</NavLinkName>
          </NavItem>
        </NavList>
      </NavbarContainer>
    </StyledContainer>
  );
};

export default Navbar;
