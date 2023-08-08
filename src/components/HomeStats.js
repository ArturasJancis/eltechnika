import React, { useState } from "react";
import styled from "styled-components";
import YouTubeVideo from "./YouTubeVideo";

const StatsSection = styled.section`
  display: flex;
  background-color: #fff;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ConfiguratorSection = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ConfiguratorTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ConfiguratorText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const DropdownButton = styled.button`
  background-color: #444;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #555;
  }
`;

const DropdownArrow = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(0)")};
`;

const ProductTable = styled.table`
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  display: ${(props) => (props.open ? "table" : "none")};
  z-index: 1;
  color: black;

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
`;

const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const VideoSection = styled.div`
  flex: 2;
  padding: 2rem;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const VideoTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const VideoText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const VideoButton = styled.button`
  background-color: #fff;
  border: 2px solid #333;
  color: #333;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const ArrowSymbol = styled.span`
  margin-left: 0.5rem;
`;

const StatsBoxesSection = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StatsBox = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  text-align: center;

  &:last-child {
    border: none;
  }
`;

const StatsBoxTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StatsBoxText = styled.p`
  font-size: 1rem;
`;

const products = ["Product 1", "Product 2", "Product 3"];

const HomeStats = () => {
  const [isTableOpen, setTableOpen] = useState(false);

  const toggleTable = () => {
    setTableOpen(!isTableOpen);
  };

  return (
    <StatsSection>
      <ConfiguratorSection>
        <ConfiguratorTitle>Product Configurator</ConfiguratorTitle>
        <ConfiguratorText>
          Find the right machine for your desires and requirements.
        </ConfiguratorText>
        <DropdownButton onClick={toggleTable}>
          Choose a Product
          <DropdownArrow open={isTableOpen}>></DropdownArrow>
        </DropdownButton>
        <ProductTable open={isTableOpen}>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <ProductLink href={`/product${index + 1}`}>
                    {product}
                  </ProductLink>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      </ConfiguratorSection>
      <VideoSection>
        <VideoTitle>Video</VideoTitle>
        <VideoText>Cutting of 10 mm acrylic on CNC Router</VideoText>
        <YouTubeVideo videoId="MrzJJdlqoI8" />
        <VideoButton>
          ALL VIDEOS
          <ArrowSymbol>></ArrowSymbol>
        </VideoButton>
      </VideoSection>
      <StatsBoxesSection>
        <StatsBox>
          <StatsBoxTitle>78</StatsBoxTitle>
          <StatsBoxText>SOLD 78 CNC machines during 2022 year</StatsBoxText>
        </StatsBox>
        <StatsBox>
          <StatsBoxTitle>4 580 200</StatsBoxTitle>
          <StatsBoxText>
            ANNUAL TURNOVER PER 2022 YEAR 4 580 200 EUR
          </StatsBoxText>
        </StatsBox>
        <StatsBox>
          <StatsBoxTitle>1 450 000</StatsBoxTitle>
          <StatsBoxText>
            SALES CNC MACHINE AMOUNTS FROM € 4 500 TO € 1 450 000
          </StatsBoxText>
        </StatsBox>
        <StatsBox>
          <StatsBoxTitle>100%</StatsBoxTitle>
          <StatsBoxText>KAMITEKA GROWTH OVER 100% ANNUALLY</StatsBoxText>
        </StatsBox>
      </StatsBoxesSection>
    </StatsSection>
  );
};

export default HomeStats;