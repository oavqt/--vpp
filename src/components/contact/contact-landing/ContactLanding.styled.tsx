import styled from 'styled-components';

//ContactLanding
const StyledContactLanding = styled.section.attrs(() => ({
  role: 'contact-landing'
}))`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default StyledContactLanding;
//

//ContactLanding Elements
const StyledContactLandingImagesContainer = styled.div`
  margin: 0 2em;
`;

export { StyledContactLandingImagesContainer };
//
