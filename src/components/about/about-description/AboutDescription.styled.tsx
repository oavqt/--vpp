import styled from 'styled-components';

//AboutDescription
const StyledAboutDescription = styled.section.attrs(() => ({
  role: 'about-description'
}))``;

export default StyledAboutDescription;
//

//AboutDescription elements
const StyledAboutDescriptionArticle = styled.article``;
const StyledAboutDescriptionHeading = styled.h2``;
const StyledAboutDescriptionImageContainer = styled.div``;
const StyledAboutDescriptionParagraph = styled.p.attrs(() => ({
  role: 'about-description-information'
}))``;

export {
  StyledAboutDescriptionArticle,
  StyledAboutDescriptionHeading,
  StyledAboutDescriptionImageContainer,
  StyledAboutDescriptionParagraph
};
//
