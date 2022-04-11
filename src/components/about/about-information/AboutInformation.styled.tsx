import styled from 'styled-components';

//AboutInformation
const StyledAboutInformation = styled.section.attrs(() => ({
  role: 'about-information'
}))`
  grid-area: information;
`;

export default StyledAboutInformation;
//

//AboutInformation elements
const StyledAboutInformationArticle = styled.article``;
const StyledAboutInformationHeading = styled.h2``;
const StyledAboutInformationImageContainer = styled.div`
  float: right;
  shape-outside: circle(50%);
`;
const StyledAboutInformationParagraph = styled.p.attrs(() => ({
  role: 'about-information-body'
}))``;

export {
  StyledAboutInformationArticle,
  StyledAboutInformationHeading,
  StyledAboutInformationImageContainer,
  StyledAboutInformationParagraph
};
//
