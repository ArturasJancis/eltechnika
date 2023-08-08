import React, { useState } from "react";
import styled from "styled-components";

const PartnersWrapper = styled.div`
  padding: 2rem;
  max-width: 1140px;
  margin: auto;
`;

const PartnersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid black;
  color: black;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const LogosContainer = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
  transform: translateX(${(props) => -props.startIndex * 110}px);
`;

const Logo = styled.img`
  max-width: 80px;
  max-height: 80px;
  margin-right: 2rem;
`;

const partnersData = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Vy5PUdCk1nZpeE31MCa1pwHaHa%26pid%3DApi&f=1&ipt=ce971848ebcb7275c896391db20ba0e976a710bf663a06b5f0aa94c6f6103d03&ipo=images",
];

const Partners = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 < partnersData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : partnersData.length - 1
    );
  };

  return (
    <PartnersWrapper>
      <PartnersHeader>
        <Title>All Partners</Title>
        <ButtonsWrapper>
          <Button onClick={handlePrev}>&lt;</Button>
          <Button onClick={handleNext}>&gt;</Button>
        </ButtonsWrapper>
      </PartnersHeader>
      <LogoWrapper>
        <LogosContainer startIndex={startIndex}>
          {partnersData.map((logo, index) => (
            <Logo key={index} src={logo} alt={`Partner Logo ${index}`} />
          ))}
        </LogosContainer>
      </LogoWrapper>
    </PartnersWrapper>
  );
};

export default Partners;