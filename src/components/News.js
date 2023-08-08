import React from "react";
import styled from "styled-components";

const NewsWrapper = styled.div`
  padding: 2rem;
  max-width: 1440px;
  margin: auto;
`;

const NewsSection = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start;
`;

const BigNewsBox = styled.div`
  flex: 1;
  display: inline-flex;
  background-color: grey;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }

  @media (max-width: 768px) {
    flex-basis: 100%; 
  }
`;

const SmallNewsBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 1rem; 

  @media (max-width: 768px) {
    padding-left: 0;
    flex-basis: 100%;
  }
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
`;

const Icon = styled.span`
  margin-left: 0.5rem;
`;

const InfoHalf = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: inherit;
`;

const PhotoHalf = styled.div`
  flex: 1.5;
  width: 54%;
  display: flex;
  justify-content: center;
`;

const Photo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const DateText = styled.p`
  font-size: 1.5rem;
  color: blue;
  margin: 0;
`;

const NewsName = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const NewsPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid grey;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const BlueDateText = styled.p`
  font-size: 1.5rem;
  color: blue;
  margin: 0;
`;

const DescriptionText = styled.p`
  font-size: 1rem;
  color: black;
  margin: 1rem 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const TitleButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const News = () => {
  return (
    <NewsWrapper>
      <TitleButtonWrapper>
        <Title>News & Events</Title>
        <Button>
          ALL NEWS
          <Icon>&gt;</Icon>
        </Button>
      </TitleButtonWrapper>
      <NewsSection>
        <BigNewsBox>
          <PhotoHalf>
            <Photo
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.instructables.com%2FORIG%2FFIL%2FZDWY%2FIB21XYLA%2FFILZDWYIB21XYLA.jpg%3Fauto%3Dwebp%26frame%3D1&f=1&nofb=1&ipt=6a5e1d9d397316f0f713fdfe78ca9f1f5aae904cf5751736e2ddd848f4c584a5&ipo=images"
              alt="News Photo"
            />
          </PhotoHalf>
          <InfoHalf>
            <DateText>16.03.2022</DateText>
            <NewsName>Kamiteka will take part...</NewsName>
          </InfoHalf>
        </BigNewsBox>
        <SmallNewsBoxWrapper>
          <NewsPreviewBox href="/link-to-news1">
            <BlueDateText>15.03.2022</BlueDateText>
            <DescriptionText>Kamiteka introduces new products</DescriptionText>
          </NewsPreviewBox>
          <NewsPreviewBox href="/link-to-news2">
            <BlueDateText>14.03.2022</BlueDateText>
            <DescriptionText>Join us at TechIndustry 2022</DescriptionText>
          </NewsPreviewBox>
          <NewsPreviewBox>
            <BlueDateText href="/link-to-news3">13.03.2022</BlueDateText>
            <DescriptionText>Expanding our services</DescriptionText>
          </NewsPreviewBox>
        </SmallNewsBoxWrapper>
      </NewsSection>
    </NewsWrapper>
  );
};

export default News;