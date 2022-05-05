import styled from 'styled-components';

//AboutTechnology
const StyledAboutTechnology = styled.section.attrs(() => ({
  role: 'about-technology'
}))`
  grid-area: technology;
`;

export default StyledAboutTechnology;
//

//AboutTechnology elements
const StyledAboutTechnologyArticle = styled.article``;
const StyledAboutTechnologyHeading = styled.h2``;
const StyledAboutTechnologyContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
`;
const StyledAboutTechnologyParagraph = styled.p.attrs(() => ({
  role: 'about-technology-body'
}))``;
const StyledAboutTechnologyTechnologies = styled.div.attrs(() => ({
  role: 'about-technology-technologies'
}))``;
const StyledAboutTechnologyTechnologiesTitle = styled.h3`
  margin: 0;
  padding: 0;
`;
const StyledAboutTechnologyTechnology = styled.p``;
const StyledAboutTechnologyTools = styled.div.attrs(() => ({
  role: 'about-technology-tools'
}))``;
const StyledAboutTechnologyToolsTitle = styled.h3`
  margin: 0;
  padding: 0;
`;
const StyledAboutTechnologyTool = styled.p``;

export {
  StyledAboutTechnologyArticle,
  StyledAboutTechnologyHeading,
  StyledAboutTechnologyContainer,
  StyledAboutTechnologyParagraph,
  StyledAboutTechnologyTechnologies,
  StyledAboutTechnologyTechnologiesTitle,
  StyledAboutTechnologyTechnology,
  StyledAboutTechnologyTools,
  StyledAboutTechnologyToolsTitle,
  StyledAboutTechnologyTool
};
//
