import React, {useState} from "react";
import styled from "styled-components";
import {HamburgerBtn} from "./Buttons";
import {Link} from "react-router-dom";

const Nav = styled.div``;

const DesktopMenuNavbar = styled.nav`
  display: flex;
  background-color: black;
  align-items: center;
  text-align: center;
  padding: 2vh 10vw;
  max-width: 100%;
  height: 2vh;
  gap: 2rem;
  font-size: 1rem;

  a:first-child {
    margin-right: auto;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileMenuNavbar = styled.nav`
  display: flex;
  border: 1px solid black;
  opacity: 90%;
  flex-direction: column;
  padding: 4rem 3rem;
  font-size: 1.5rem;
  gap: 2rem;
  font-weight: bold;
  background: black;
  color: white;

  a {
    color: white;
    text-decoration: none;
    text-align: center;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
    background-color: black;
  margin-bottom: 10px;
`;

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    return (
        <NavbarContainer>
            <HamburgerBtn className="fa fa-bars" onClick={() => setNavbarOpen(!navbarOpen)}/>
            {
                navbarOpen && <MobileMenuNavbar>
                    <Link to="/" onClick={() => setNavbarOpen(false)}>
                        <h1>Pagrindinis</h1>
                    </Link>
                    <Link to="/contacts" onClick={() => setNavbarOpen(false)}>
                        <p>Kontaktai</p>
                    </Link>
                    <Link to="/articles/saved" onClick={() => setNavbarOpen(false)}>
                        <p>Išsaugoti</p>
                    </Link>
                    <Link to="/login" onClick={() => setNavbarOpen(false)}>
                        <p>Prisijungti/Registruotis</p>
                    </Link>
                    <Link to="/logout" onClick={() => setNavbarOpen(false)}>
                        <p><i className="fa fa-sign-out" aria-hidden="true"></i></p>
                    </Link>
                </MobileMenuNavbar>
            }
            <DesktopMenuNavbar>
                <Link to="/">
                    <h1>Pagrindinis</h1>
                </Link>
                <Link to="/contacts">
                    <p>Kontaktai</p>
                </Link>
                <Link to="/articles/saved">
                    <p>Išsaugoti</p>
                </Link>
                <Link to="/login" onClick={() => setNavbarOpen(false)}>
                    <p>Prisijungti/Registruotis</p>
                </Link>
                <Link to="/logout" onClick={() => setNavbarOpen(false)}>
                    <p><i className="fa fa-sign-out" aria-hidden="true"></i></p>
                </Link>
            </DesktopMenuNavbar>
        </NavbarContainer>
    )
};

export default Navbar;