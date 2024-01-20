
import styled from "styled-components";




export const   NavBar = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
  background-color: #181818;
  padding: 12px 20px;
`;
export const Logo = styled.li``;

export const LogoImage = styled.img`
  width: 40px;
`;

export const  Menu = styled.span`
  display: flex;
  @media (max-width: 610px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 100;
    background-color: var(--color2);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavOps = styled.li`
  padding-left: 30px;
  @media(max-width: 610px){

    margin-top: 40px;

  }
`;

export const  OpenMenu = styled.label`
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  /* _____ */

  position: absolute;
  color: var(--color1);
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 610px) {
    display: block;
  }

  &:checked ~ & {
    right: 0;
  }
`;

export const CloseMenu = styled.label`
  top: 20px;
  right: 20px;

  /* ___________ */

  position: absolute;
  color: var(--color1);
  cursor: pointer;
  font-size: 1.5rem;
  display: none;

  @media (max-width: 610px) {
    display: block;
  }
`;

export const NavLinkStyled = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  text-align: center;
  transition: 0.15s ease-in-out;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color1);
    transition: 0.15s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  @media(max-width: 610px){
    padding: 10px;
  }
`;
