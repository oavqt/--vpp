import styled from 'styled-components';

//ContactLanding
const StyledContactLanding = styled.section.attrs(() => ({
  role: 'contact-landing'
}))`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default StyledContactLanding;
//

//ContactLanding Elements
const StyledContactLandingLink = styled.a`
  color: #313131;
  margin: 0 0.2em;
  text-decoration: none;

  :hover {
    color: #cc00ff;
  }
`;
const StyledContactLandingLinkContainer = styled.div`
  display: flex;
`;

export { StyledContactLandingLink, StyledContactLandingLinkContainer };
//
