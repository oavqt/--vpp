import styled from 'styled-components';

//ProjectsDisplay
const StyledProjectsDisplay = styled.section.attrs(() => ({
  role: 'projects-display'
}))`
  align-items: center;
  display: flex;
  height: 75%;
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
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const StyledProjectsDisplayProjectContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledProjectsDisplayHeading = styled.h2``;
const StyledProjectsDisplayImage = styled.img``;
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
const StyledProjectsDisplayTechnologyImageContainer = styled.div``;
//

export {
  StyledProjectsDisplayLanding,
  StyledProjectsDisplayLandingHeading,
  StyledProjectsDisplayLandingParagraph,
  StyledProjectsDisplayProject,
  StyledProjectsDisplayProjectContainer,
  StyledProjectsDisplayHeading,
  StyledProjectsDisplayImage,
  StyledProjectsDisplayImageContainer,
  StyledProjectsDisplayLink,
  StyledProjectsDisplayLinkContainer,
  StyledProjectsDisplayParagraph,
  StyledProjectsDisplayTechnologyImageContainer
};
//
