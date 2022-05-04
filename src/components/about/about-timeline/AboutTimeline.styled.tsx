import styled from 'styled-components';

//AboutTimeline
const StyledAboutTimeline = styled.section.attrs(() => ({
  role: 'about-timeline'
}))`
  grid-area: timeline;
`;

export default StyledAboutTimeline;
//

//AboutTimeline elements
const StyledAboutTimelineArticle = styled.article``;
const StyledAboutTimelineHeading = styled.h2``;

const StyledAboutTimelineMarker = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: 100%;
  justify-content: space-evenly;
`;
const StyledAboutTimelineMarkerContainer = styled.div.attrs(() => ({
  role: 'about-timeline-timeline'
}))`
  align-items: start;
  display: flex;
  gap: 2em;
  justify-content: flex-start;
  width: 100%;
`;
const StyledAboutTimelineMarkerGraphic = styled.span`
  background: #ffb7c3;
  display: block;
  height: 0.2em;
  width: 100%;
`;
const StyledAboutTimelineMarkerProject = styled.a`
  color: #101010;
  text-decoration: none;
  margin: 0.2em 0;

  :hover {
    color: #cc00ff;
  }
`;
const StyledAboutTimelineMarkerProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledAboutTimelineMarkerTechnology = styled.h3`
  font-weight: normal;
  margin: 0;
  padding: 0;
`;
const StyledAboutTimelineParagraph = styled.p.attrs(() => ({
  role: 'about-timeline-body'
}))``;

export {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineMarker,
  StyledAboutTimelineMarkerContainer,
  StyledAboutTimelineMarkerGraphic,
  StyledAboutTimelineMarkerProject,
  StyledAboutTimelineMarkerProjectContainer,
  StyledAboutTimelineMarkerTechnology,
  StyledAboutTimelineParagraph
};
//
