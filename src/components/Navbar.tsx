import React, {useState} from "react";
import {
    NavbarContainer,
    NavbarInnerContainer,
    NavbarLeftContainer,
    NavbarRightContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton
} from "../styles/NavbarStyle";
const LogoImg =  require("../assets/logo.png")

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <NavbarLeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> Home </NavbarLink>
                        <NavbarLink to="/contacts">Contacts</NavbarLink>
                        <NavbarLink to="/about">About</NavbarLink>
                        <NavbarLink to="/sign-up">Sign Up!</NavbarLink>
                        <OpenLinksButton >&#10005;
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </NavbarLeftContainer>
                <NavbarRightContainer>
                    <Logo src={LogoImg}></Logo>
                </NavbarRightContainer>
            </NavbarInnerContainer>
        </NavbarContainer>
    )
};

export default Navbar;