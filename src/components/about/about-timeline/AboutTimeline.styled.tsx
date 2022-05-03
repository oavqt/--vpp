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
  height: 100%;
  justify-content: space-between;
  text-align: center;
`;
const StyledAboutTimelineMarkerContainer = styled.div.attrs(() => ({
  role: 'about-timeline-timeline'
}))`
  align-items: start;
  display: grid;
  grid: 1fr 1em 100% / repeat(5, 1fr);
  justify-items: center;
`;
const StyledAboutTimelineMarkerIndent = styled.div`
  animation: --timeline-marker-progress ease-in 0.2s forwards 2s;
  background: #ffb7c3;
  border-radius: 0.1em;
  width: 0.5em;

  @keyframes --timeline-marker-progress {
    from {
      height: 0;
    }
    to {
      height: 0.5em;
    }
  }
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
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledAboutTimelineMarkerTechnology = styled.h3`
  font-weight: normal;
  margin: 0;
  padding: 0;
`;
const StyledAboutTimelineParagraph = styled.p.attrs(() => ({
  role: 'about-timeline-body'
}))``;
const StyledAboutTimelineTemplate = styled.div.attrs(() => ({
  role: 'about-timeline-timeline-template'
}))`
  background: #313131;
  border-radius: 0.1em;
  grid-area: 2 / 1 / 3 / -1;
  height: 1em;
  width: 100%;

  @keyframes --timeline-progress {
    from {
      width: 0%;
    }
    to {
      width: 80%;
    }
  }

  ::after {
    animation: --timeline-progress 0.6s ease-in forwards;
    background: #ffb7c3;
    content: '';
    display: inline-block;
    height: 1em;
    width: 80%;
  }
`;

export {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineMarker,
  StyledAboutTimelineMarkerContainer,
  StyledAboutTimelineMarkerIndent,
  StyledAboutTimelineMarkerProject,
  StyledAboutTimelineMarkerProjectContainer,
  StyledAboutTimelineMarkerTechnology,
  StyledAboutTimelineParagraph,
  StyledAboutTimelineTemplate
};
//
