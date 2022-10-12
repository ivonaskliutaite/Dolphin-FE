import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

export const NavbarRightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarLeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo =styled.img `
  margin: 10px;
  max-width: 180px;
  height: 7.5vh;
`;

export const OpenLinksButton = styled.button `
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  
  @media (min-width: 700px) {
    display: none;
  }
`;

