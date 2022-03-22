import styled from 'styled-components';

//AboutTimeline
const StyledAboutTimeline = styled.section.attrs(() => ({
  role: 'about-timeline'
}))``;

export default StyledAboutTimeline;
//

//AboutTimeline elements
const StyledAboutTimelineArticle = styled.article``;
const StyledAboutTimelineHeading = styled.h2``;
const StyledAboutTimelineImageContainer = styled.div``;
const StyledAboutTimelineParagraph = styled.p.attrs(() => ({
  role: 'about-timeline-information'
}))``;

export {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineImageContainer,
  StyledAboutTimelineParagraph
};
//
