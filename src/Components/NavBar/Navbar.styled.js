import styled, { keyframes } from "styled-components";

const underlineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const NavbarContainer = styled.nav`
  background-color: transparent;
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
`;

export const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-left: 20px;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: white;
    animation: ${underlineAnimation} 0.3s ease;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
