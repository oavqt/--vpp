import styled from 'styled-components';

//ProjectsDisplay
const StyledProjectsDisplay = styled.section.attrs(() => ({
  role: 'projects-display'
}))`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

export default StyledProjectsDisplay;
//

//ProjectDisplay Elements
//ProjectDisplay Elements Landing
const StyledProjectsDisplayLanding = styled.div.attrs(() => ({
  role: 'projects-display-landing'
}))``;
const StyledProjectsDisplayLandingHeading = styled.h2``;
const StyledProjectsDisplayLandingParagraph = styled.p.attrs(() => ({
  role: 'projects-display-landing-description-body'
}))``;
//
//ProjectDisplay Elements Project
const StyledProjectsDisplayProject = styled.div.attrs(() => ({
  role: 'projects-display-project'
}))`
  animation: --fade-in 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
`;
const StyledProjectsDisplayProjectContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledProjectsDisplayDescription = styled.div`
  width: 25%;
`;
const StyledProjectsDisplayDescriptionGraphic = styled.span`
  background: #ffb7c3;
  display: block;
  height: 0.2em;
  width: 100%;
`;
const StyledProjectsDisplayHeading = styled.h2``;
const StyledProjectsDisplayImage = styled.img`
  max-width: 100em;
  width: 100%;
`;
const StyledProjectsDisplayImageContainer = styled.div`
  margin: 0 2em;
  width: 100%;
`;
const StyledProjectsDisplayLink = styled.a`
  color: #101010;
  margin: 0 0.2em;
  text-decoration: none;

  :hover {
    color: #cc00ff;
  }
`;
const StyledProjectsDisplayLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledProjectsDisplayParagraph = styled.p.attrs(() => ({
  role: 'projects-display-description-body'
}))``;
const StyledProjectsDisplayTechnologies = styled.p.attrs(() => ({
  role: 'projects-display-technologies'
}))`
  margin: 0;
  text-align: center;
`;
//

export {
  StyledProjectsDisplayLanding,
  StyledProjectsDisplayLandingHeading,
  StyledProjectsDisplayLandingParagraph,
  StyledProjectsDisplayProject,
  StyledProjectsDisplayProjectContainer,
  StyledProjectsDisplayDescription,
  StyledProjectsDisplayDescriptionGraphic,
  StyledProjectsDisplayHeading,
  StyledProjectsDisplayImage,
  StyledProjectsDisplayImageContainer,
  StyledProjectsDisplayLink,
  StyledProjectsDisplayLinkContainer,
  StyledProjectsDisplayParagraph,
  StyledProjectsDisplayTechnologies
};
//
