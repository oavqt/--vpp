import { FC } from 'react';
import assets from '../../assets/assets';
import AboutInformation from '../../components/about/about-description/AboutInformation';
import AboutTechnology from '../../components/about/about-technology/AboutTechnology';
import AboutTimeline from '../../components/about/about-timeline/AboutTimeline';
import StyledAbout, { StyledAboutGrid } from './About.styled';

const About: FC = () => {
  return (
    <StyledAbout>
      <StyledAboutGrid>
        <AboutInformation information={{ ...assets.pages.about.information }} />
        <AboutTechnology technology={{ ...assets.pages.about.technology }} />
        <AboutTimeline timeline={{ ...assets.pages.about.timeline }} />
      </StyledAboutGrid>
    </StyledAbout>
  );
};

export default About;
