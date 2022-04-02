import styled from 'styled-components';

//ProjectsDisplay
const StyledProjectsDisplay = styled.section.attrs(() => ({
  role: 'projects-display'
}))``;

export default StyledProjectsDisplay;
//

//ProjectDisplay
const StyledProjectsDisplayLanding = styled.div.attrs(() => ({
  role: 'projects-display-landing'
}))``;
const StyledProjectsDisplayLandingHeading = styled.h2``;
const StyledProjectsDisplayLandingParagraph = styled.p.attrs(() => ({
  role: 'projects-display-landing-description-body'
}))``;

const StyledProjectsDisplayProject = styled.div.attrs(() => ({
  role: 'projects-display-project'
}))``;
const StyledProjectsDisplayHeading = styled.h2``;
const StyledProjectsDisplayImage = styled.img``;
const StyledProjectsDisplayLink = styled.a``;
const StyledProjectsDisplayParagraph = styled.p.attrs(() => ({
  role: 'projects-display-description-body'
}))``;
const StyledProjectsDisplayTechnologyImageContainer = styled.div``;

export {
  StyledProjectsDisplayLanding,
  StyledProjectsDisplayLandingHeading,
  StyledProjectsDisplayLandingParagraph,
  StyledProjectsDisplayProject,
  StyledProjectsDisplayHeading,
  StyledProjectsDisplayImage,
  StyledProjectsDisplayLink,
  StyledProjectsDisplayParagraph,
  StyledProjectsDisplayTechnologyImageContainer
};
//
