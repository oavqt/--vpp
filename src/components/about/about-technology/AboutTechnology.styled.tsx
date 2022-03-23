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
const StyledAboutTechnologyImageContainer = styled.div``;
const StyledAboutTechnologyParagraph = styled.p.attrs(() => ({
  role: 'about-technology-information'
}))``;

export {
  StyledAboutTechnologyArticle,
  StyledAboutTechnologyHeading,
  StyledAboutTechnologyImageContainer,
  StyledAboutTechnologyParagraph
};
//
