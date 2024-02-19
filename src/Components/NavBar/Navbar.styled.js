import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const underlineAnimation = keyframes`
  from {
    width: 0;
    background-color: transparent;
  }

  to {
    width: 50%;
    background-color: red;
  }
`;

export const StyledContainer = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"});

  background-size: cover;
  background-position: center;
  height: 10vh;
  width: 100vw;
`;

export const NavbarContainer = styled.nav`
  background-color: transparent;

  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  color: black;
`;

export const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MenuBtn = styled.label`
  color: black;
  cursor: pointer;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;

  @media (max-width: 600px) {
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    top: 10vh;
    right: ${({ $clicked }) => ($clicked ? "0" : "-100vw")};

    background: black;
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    transition: right 0.4s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease, margin 0.3s ease;

  &:hover {
    transform: scale(1.2);
    margin-left: 15px;
    margin-right: 15px;
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50%;
    height: 2px;
    background-color: red;
    font-size: 30px;
    animation: ${underlineAnimation} 0.4s ease-out;
  }

  @media (max-width: 600px) {
    margin: 40px 0;
    font-size: larger;
    font-weight: 900;

    &:hover {
      transform: scale(1.2);
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  color: black;
`;

export const NavLinkName = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  letter-spacing: 2px;
`;
