import React from "react";
import {
  NavbarContainer,
  Logo,
  NavList,
  NavItem,
  NavLink,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Paridhi</Logo>
      <NavList>
        <NavItem>
          <NavLink href="">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Workshop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Pre-Paridhi-Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Sign Up</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
