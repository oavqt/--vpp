import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledAboutTimeline, {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineImageContainer,
  StyledAboutTimelineParagraph
} from './AboutTimeline.styled';

interface AboutTimelineProps {
  timeline: {
    description: {
      body: string;
      title: string;
    };
    images: {
      alt: string;
      src: string;
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
        <StyledAboutTimelineImageContainer>
          {props.timeline.images.map((item) => (
            <div key={uuidv4()}>
              <img alt={item.alt} src={item.src} />
            </div>
          ))}
        </StyledAboutTimelineImageContainer>
      </StyledAboutTimelineArticle>
    </StyledAboutTimeline>
  );
};

export default AboutTimeline;
