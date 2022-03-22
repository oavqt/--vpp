import styled from 'styled-components';

//Landing
const StyledLanding = styled.section.attrs(() => ({
  role: 'home-landing'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default StyledLanding;
//

//Landing Elements
const StyledLandingImagesContainer = styled.div`
  display: flex;
`;

export { StyledLandingImagesContainer };
//
