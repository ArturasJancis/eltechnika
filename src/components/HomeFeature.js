import React from "react";
import styled from "styled-components";

const FeatureSection = styled.section`
  display: flex;
  background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.instructables.com%2FORIG%2FFIL%2FZDWY%2FIB21XYLA%2FFILZDWYIB21XYLA.jpg%3Fauto%3Dwebp%26frame%3D1&f=1&nofb=1&ipt=6a5e1d9d397316f0f713fdfe78ca9f1f5aae904cf5751736e2ddd848f4c584a5&ipo=images");
  background-size: cover;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (max-width: 768px) {
    flex: 1;
    padding: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: 1;
    padding: 1rem;
  }
`;

const MainText = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SmallText = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Icon = styled.span`
  margin-left: 0.5rem;
`;

const HomeFeature = () => {
  return (
    <FeatureSection>
      <LeftSection>
        <MainText>
          KAMITEKA WAS FOUNDED IN ORDER TO PROVIDE HIGH-QUALITY INDUSTRIAL
          EQUIPMENT TO THE INDUSTRY
        </MainText>
        <SmallText>Fresh idea for improvement</SmallText>
        <Button>
          READ MORE
          <Icon>&gt;</Icon>
        </Button>
      </LeftSection>
      <RightSection>
        <MainText>Service throughout the Baltic States</MainText>
        <Button>
          READ MORE
          <Icon>&gt;</Icon>
        </Button>
      </RightSection>
    </FeatureSection>
  );
};

export default HomeFeature;