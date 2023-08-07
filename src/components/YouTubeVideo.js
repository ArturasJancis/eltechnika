import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
`;

const VideoFrame = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const YouTubeVideo = ({ videoId }) => {
  return (
    <VideoContainer>
      <VideoFrame
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default YouTubeVideo;