import React, { useState } from "react";
import styled from "styled-components";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faMapMarker,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderWrapper = styled.header`
  background-color: #f4f4f4;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1rem;
    gap: 0.5rem;
  }

  @media (max-width: 320px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.a`
  text-decoration: none;
`;

const LogoImage = styled.img`
  max-height: 60px;

  @media (max-width: 476px) {
    max-height: 35px;
  }
`;

const HeaderContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1100px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderContactItem = styled.a`
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const HeaderSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 568px) {
    display: none;
  }
`;

const BottomHeader = styled.div`
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  justify-content: space-around;
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
  display: ${(props) => (props.open ? "flex" : "none")};

  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
  }
`;

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9900;
  }

  @media (max-width: 838px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const LanguageSelectorContainer = styled.div`
  position: relative;
  margin-left: 2rem;
`;

const LanguageSelectorButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
`;

const LanguageOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const LanguageOption = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 1rem;
  }
`;

const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <TopHeader>
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </HamburgerButton>
        <Logo href="/">
          <LogoImage
            src="https://kamiteka.eu/images/logo_dark.svg"
            alt="Kamiteka"
          />
        </Logo>
        <HeaderContacts>
          <HeaderContactItem href="tel:+37060039776">
            <FontAwesomeIcon icon={faPhone} /> +370 600 39776
          </HeaderContactItem>
          <HeaderContactItem>
            <FontAwesomeIcon icon={faMapMarker} /> Vilnius, Kuprioniskes,
            Vilties str. 11
          </HeaderContactItem>
          <HeaderContactItem href="mailto:info@kamiteka.eu">
            <FontAwesomeIcon icon={faEnvelope} /> info@kamiteka.eu
          </HeaderContactItem>
        </HeaderContacts>
        <HeaderSocials>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </HeaderSocials>
        <LanguageSelectorContainer>
          <LanguageSelectorButton
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          >
            <FontAwesomeIcon icon={faGlobe} /> <span>Language</span>
          </LanguageSelectorButton>
          <LanguageOptions isOpen={languageDropdownOpen}>
            <LanguageOption>English</LanguageOption>
            <LanguageOption>Français</LanguageOption>
            <LanguageOption>Español</LanguageOption>
          </LanguageOptions>
        </LanguageSelectorContainer>
      </TopHeader>
      <BottomHeader>
        <HeaderMenu open={menuOpen}>
          <MenuItem href="#">PRODUCTS</MenuItem>
          <MenuItem href="#">INDUSTRY</MenuItem>
          <MenuItem href="#">SERVICES</MenuItem>
          <MenuItem href="#">ABOUT US</MenuItem>
          <MenuItem href="#">NEWS & EVENTS</MenuItem>
          <MenuItem href="#">VIDEO</MenuItem>
          <MenuItem href="#">CAREER</MenuItem>
          <MenuItem href="#">CONTACTS</MenuItem>
        </HeaderMenu>
      </BottomHeader>
    </HeaderWrapper>
  );
};

export default Header;