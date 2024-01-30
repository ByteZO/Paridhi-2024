import styled, { keyframes } from "styled-components";

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

export const NavbarContainer = styled.nav`
  background-color: transparent;
  padding: 0 50px;
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

export const MenuBtn = styled.label`
  color: wheat;
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
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bolder;
  letter-spacing: 2px;
`;
