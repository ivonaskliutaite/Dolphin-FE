import React, {useState} from "react";
import {
    NavbarContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLeftContainer,
    NavbarRightContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton
} from "../styles/NavbarStyle";
const LogoImg =  require("../assets/logo.png")

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <NavbarLeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/contacts">Contacts</NavbarLink>
                        <NavbarLink to="/about">About</NavbarLink>
                        <NavbarLink to="/sign-up">Sign Up!</NavbarLink>
                        <OpenLinksButton onClick={() => {setExtendNavbar((currentValue) => !currentValue);
                        }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>} </OpenLinksButton>
                    </NavbarLinkContainer>
                </NavbarLeftContainer>
                <NavbarRightContainer>
                    <Logo src={LogoImg}></Logo>
                </NavbarRightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
    )
};

export default Navbar;