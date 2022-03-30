import styled from 'styled-components';

//ProjectsDisplay
const StyledProjectsDisplay = styled.section.attrs(() => ({
  role: 'projects-display'
}))``;

export default StyledProjectsDisplay;
//

//ProjectDisplay Elements
const StyledProjectsDisplayHeading = styled.h2``;
const StyledProjectsDisplayImage = styled.img``;
const StyledProjectsDisplayLink = styled.a``;
const StyledProjectsDisplayParagraph = styled.p.attrs(() => ({
  role: 'projects-display-description-body'
}))``;
const StyledProjectsDisplayTechnologyImageContainer = styled.div``;

export {
  StyledProjectsDisplayHeading,
  StyledProjectsDisplayImage,
  StyledProjectsDisplayLink,
  StyledProjectsDisplayParagraph,
  StyledProjectsDisplayTechnologyImageContainer
};
//
