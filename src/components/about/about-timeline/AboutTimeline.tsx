import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledAboutTimeline, {
  StyledAboutTimelineArticle,
  StyledAboutTimelineHeading,
  StyledAboutTimelineImageContainer,
  StyledAboutTimelineParagraph
} from './AboutTimeline.styled';

const AboutTimeline: FC = () => {
  return (
    <StyledAboutTimeline>
      <StyledAboutTimelineArticle>
        <div>
          <StyledAboutTimelineHeading>
            {assets.pages.about.timeline.description.title}
          </StyledAboutTimelineHeading>
          <StyledAboutTimelineParagraph>
            {assets.pages.about.timeline.description.body}
          </StyledAboutTimelineParagraph>
        </div>
        <StyledAboutTimelineImageContainer>
          {assets.pages.about.timeline.images.map((item) => (
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
