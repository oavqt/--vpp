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
const StyledHomeLandingImage = styled.img`
  margin: 0 0.2em;
`;
const StyledHomeLandingImageContainer = styled.div`
  display: flex;
`;

export { StyledHomeLandingImage, StyledHomeLandingImageContainer };
//
