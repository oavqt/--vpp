import { FC } from 'react';
import AboutDescription from '../../components/about/about-description/AboutDescription';
import AboutTechnology from '../../components/about/about-technology/AboutTechnology';
import AboutTimeline from '../../components/about/about-timeline/AboutTimeline';
import StyledAbout, { StyledAboutGrid } from './About.styled';

const About: FC = () => {
  return (
    <StyledAbout>
      <StyledAboutGrid>
        <AboutDescription />
        <AboutTechnology />
        <AboutTimeline />
      </StyledAboutGrid>
    </StyledAbout>
  );
};

export default About;
