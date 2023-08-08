import React from "react";
import styled from "styled-components";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarker,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.div`
  position: relative;
  background-color: darkgrey;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
`;

const LogoInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid white;
  padding-right: 3rem;
  margin-right: 2rem;
  padding-left: 2rem;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    margin-right: 0;

  }
`;

const Logo = styled.img`
  margin: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const ContactItem = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const HoverableContactItem = styled(ContactItem)`
  margin: 0;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #f4b400;
  }
`;

const SocialLogos = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Line = styled.div`
  width: 1px;
  background-color: white;
  height: 100%;
  margin: 0 2rem;
`;

const FooterContent = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column; 

  }
`;

const Columns = styled.div`
flex: 1;
display: flex;
flex-direction: column; 
align-items: center;

@media (min-width: 900px) {
  flex-direction: row; 
  justify-content: space-between;
  align-items: flex-start;
  flex: 2;
}
`;

const Column = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: #f4b400;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0.85rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #f4b400;
  }
`;

const FooterStrip = styled.div`
  background-color: #6e6e6e;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.5rem;
`;

const DesignCredit = styled.p`
  margin: 0;
  font-size: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoInfo>
          <Logo
            src="https://kamiteka.eu/images/logo_dark.svg"
            alt="Logo"
            onClick={() => (window.location.href = "/")}
          />
          <ContactInfo>
            <HoverableContactItem
              onClick={() => (window.location.href = "tel:+37060039776")}
            >
              <FontAwesomeIcon icon={faPhone} /> Phone: +370 600 39776
            </HoverableContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faMapMarker} /> Address: Vilnius,
              Kuprioniskes, Vilties str. 11
            </ContactItem>
            <HoverableContactItem
              onClick={() => (window.location.href = "mailto:info@kamiteka.eu")}
            >
              <FontAwesomeIcon icon={faEnvelope} /> info@kamiteka.eu
            </HoverableContactItem>
          </ContactInfo>
          <SocialLogos>
            <SocialLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </SocialLink>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
          </SocialLogos>
        </LogoInfo>
        <Line />
        <Columns>
          <Column>
            <Title>PRODUCTS</Title>
            <List>
              <ListItem>Sheet Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
              <ListItem>Pipe Fiber Laser</ListItem>
            </List>
          </Column>
          <Column>
            <Title>INDUSTRY</Title>
            <List>
              <ListItem>Marine</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
              <ListItem>Furniture</ListItem>
            </List>
          </Column>
          <Column>
            <Title>SERVICES</Title>
            <List>
              <ListItem>ABOUT US</ListItem>
              <ListItem>NEWS & EVENTS</ListItem>
              <ListItem>VIDEO</ListItem>
              <ListItem>CAREER</ListItem>
              <ListItem>CONTACTS</ListItem>
            </List>
          </Column>
        </Columns>
      </FooterContent>
      <FooterStrip>
        <Copyright>© 2023 KAMITEKA</Copyright>
        <DesignCredit>Development of Design Studio K2D</DesignCredit>
      </FooterStrip>
    </FooterWrapper>
  );
};

export default Footer;
