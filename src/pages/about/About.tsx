import { FC } from 'react';
import AboutDescription from '../../components/about/about-description/AboutDescription';
import AboutTechnology from '../../components/about/about-technology/AboutTechnology';
import AboutTimeline from '../../components/about/about-timeline/AboutTimeline';
import StyledAbout from './About.styled';

const About: FC = () => {
  return (
    <StyledAbout>
      <AboutDescription />
      <AboutTechnology />
      <AboutTimeline />
    </StyledAbout>
  );
};

export default About;
