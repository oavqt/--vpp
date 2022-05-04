import styled from 'styled-components';

//ContactLanding
const StyledContactLanding = styled.section.attrs(() => ({
  role: 'contact-landing'
}))`
  align-items: center;
  display: flex;
  gap: 0.5em;
  justify-content: center;
  flex-direction: column;
`;

export default StyledContactLanding;
//

//ContactLanding Elements
const StyledContactLandingGraphic = styled.span`
  background: #ffb7c3;
  display: block;
  height: 0.2em;
  width: 100%;
`;
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
const StyledContactLandingMessage = styled.h2`
  margin: 0;
  padding: 0;
`;

export {
  StyledContactLandingGraphic,
  StyledContactLandingLink,
  StyledContactLandingLinkContainer,
  StyledContactLandingMessage
};
//
