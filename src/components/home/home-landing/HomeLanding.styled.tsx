import styled from 'styled-components';

//HomeLanding
const StyledHomeLanding = styled.section.attrs(() => ({
  role: 'home-landing'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default StyledHomeLanding;
//

//HomeLanding Elements
const StyledHomeLandingImagesContainer = styled.div`
  display: flex;
`;

export { StyledHomeLandingImagesContainer };
//
