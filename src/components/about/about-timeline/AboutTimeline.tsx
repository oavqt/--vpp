import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledAboutTimeline, {
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
} from './AboutTimeline.styled';

interface AboutTimelineProps {
  timeline: {
    description: {
      body: string;
      title: string;
    };
    markers: {
      technology: string;
      projects: {
        project: {
          title: string;
          path: string;
        };
      }[];
    }[];
  };
}

const AboutTimeline: FC<AboutTimelineProps> = (props) => {
  return (
    <StyledAboutTimeline>
      <StyledAboutTimelineArticle>
        <div>
          <StyledAboutTimelineHeading>
            {props.timeline.description.title}
          </StyledAboutTimelineHeading>
          <StyledAboutTimelineParagraph>
            {props.timeline.description.body}
          </StyledAboutTimelineParagraph>
        </div>
        <StyledAboutTimelineMarkerContainer>
          {props.timeline.markers.map((item) => (
            <StyledAboutTimelineMarker key={uuidv4()}>
              <StyledAboutTimelineMarkerTechnology>
                {item.technology}
              </StyledAboutTimelineMarkerTechnology>
              <StyledAboutTimelineMarkerIndent />
            </StyledAboutTimelineMarker>
          ))}
          {props.timeline.markers.map((item) => (
            <StyledAboutTimelineMarkerProjectContainer key={uuidv4()}>
              {item.projects.map((item) => (
                <StyledAboutTimelineMarkerProject
                  key={uuidv4()}
                  href={item.project.path}
                >
                  {item.project.title}
                </StyledAboutTimelineMarkerProject>
              ))}
            </StyledAboutTimelineMarkerProjectContainer>
          ))}
          <StyledAboutTimelineTemplate />
        </StyledAboutTimelineMarkerContainer>
      </StyledAboutTimelineArticle>
    </StyledAboutTimeline>
  );
};

export default AboutTimeline;
