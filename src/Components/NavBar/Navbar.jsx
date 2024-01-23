import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuBtn,
  NavList,
  NavItem,
  NavLink,
} from "./Navbar.styled";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <NavbarContainer>
      <Logo>Paridhi</Logo>

      <MenuBtn onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </MenuBtn>
      <NavList $clicked={isClicked}>
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
