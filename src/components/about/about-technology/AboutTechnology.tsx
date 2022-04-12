import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledAboutTechnology, {
  StyledAboutTechnologyArticle,
  StyledAboutTechnologyContainer,
  StyledAboutTechnologyHeading,
  StyledAboutTechnologyParagraph,
  StyledAboutTechnologyTechnologies,
  StyledAboutTechnologyTechnologiesTitle,
  StyledAboutTechnologyTechnology,
  StyledAboutTechnologyTool,
  StyledAboutTechnologyTools,
  StyledAboutTechnologyToolsTitle
} from './AboutTechnology.styled';

interface AboutTechnologyProps {
  technology: {
    description: {
      body: string;
      title: string;
    };
    technologies: string[];
    tools: string[];
  };
}

const AboutTechnology: FC<AboutTechnologyProps> = (props) => {
  return (
    <StyledAboutTechnology>
      <StyledAboutTechnologyArticle>
        <div>
          <StyledAboutTechnologyHeading>
            {props.technology.description.title}
          </StyledAboutTechnologyHeading>
          <StyledAboutTechnologyParagraph>
            {props.technology.description.body}
          </StyledAboutTechnologyParagraph>
        </div>
        <StyledAboutTechnologyContainer>
          <StyledAboutTechnologyTechnologies>
            <StyledAboutTechnologyTechnologiesTitle>
              technologies
            </StyledAboutTechnologyTechnologiesTitle>
            {props.technology.technologies.map((item) => (
              <div key={uuidv4()}>
                <StyledAboutTechnologyTechnology>
                  {item}
                </StyledAboutTechnologyTechnology>
              </div>
            ))}
          </StyledAboutTechnologyTechnologies>
          <StyledAboutTechnologyTools>
            <StyledAboutTechnologyToolsTitle>
              tools
            </StyledAboutTechnologyToolsTitle>
            {props.technology.tools.map((item) => (
              <div key={uuidv4()}>
                <StyledAboutTechnologyTool>{item}</StyledAboutTechnologyTool>
              </div>
            ))}
          </StyledAboutTechnologyTools>
        </StyledAboutTechnologyContainer>
      </StyledAboutTechnologyArticle>
    </StyledAboutTechnology>
  );
};

export default AboutTechnology;
