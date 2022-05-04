import styled from 'styled-components';

//HomeLanding
const StyledHomeLanding = styled.section.attrs(() => ({
  role: 'home-landing'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default StyledHomeLanding;
//

//HomeLanding Elements
const StyledHomeLandingGraphic = styled.span`
  background: #ffb7c3;
  display: block;
  height: 0.2em;
  margin-top: 1em;
  width: 100%;
`;
const StyledHomeLandingImage = styled.img`
  margin: 0 0.2em;
`;
const StyledHomeLandingImageContainer = styled.div`
  display: flex;
`;

export {
  StyledHomeLandingGraphic,
  StyledHomeLandingImage,
  StyledHomeLandingImageContainer
};
//
