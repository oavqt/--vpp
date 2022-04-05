import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProjectObject } from '../../../pages/projects/Projects';
import StyledProjectsDisplay, {
  StyledProjectsDisplayLandingHeading,
  StyledProjectsDisplayLandingParagraph,
  StyledProjectsDisplayHeading,
  StyledProjectsDisplayImage,
  StyledProjectsDisplayLink,
  StyledProjectsDisplayParagraph,
  StyledProjectsDisplayTechnologyImageContainer,
  StyledProjectsDisplayLanding,
  StyledProjectsDisplayProject,
  StyledProjectsDisplayLinkContainer,
  StyledProjectsDisplayImageContainer,
  StyledProjectsDisplayProjectContainer
} from './ProjectsDisplay.styled';

interface ProjectDisplayProps {
  display: ProjectObject;
}

const ProjectsDisplay: FC<ProjectDisplayProps> = (props) => {
  return (
    <StyledProjectsDisplay>
      {props.display.internal.empty ? (
        <StyledProjectsDisplayLanding>
          <StyledProjectsDisplayLandingHeading>
            {props.display.description.title}
          </StyledProjectsDisplayLandingHeading>
          <StyledProjectsDisplayLandingParagraph>
            {props.display.description.body}
          </StyledProjectsDisplayLandingParagraph>
        </StyledProjectsDisplayLanding>
      ) : (
        <StyledProjectsDisplayProject>
          <StyledProjectsDisplayProjectContainer>
            <StyledProjectsDisplayImageContainer>
              <div>
                <StyledProjectsDisplayImage
                  alt={props.display.assets.image.alt}
                  src={props.display.assets.image.src}
                />
              </div>
              <StyledProjectsDisplayTechnologyImageContainer>
                {props.display.assets.technology.map((item) => (
                  <div key={uuidv4()}>
                    <img alt={item.alt} src={item.src} />
                  </div>
                ))}
              </StyledProjectsDisplayTechnologyImageContainer>
            </StyledProjectsDisplayImageContainer>
            <div>
              <StyledProjectsDisplayHeading>
                {props.display.description.title}
              </StyledProjectsDisplayHeading>
              <StyledProjectsDisplayParagraph>
                {props.display.description.body}
              </StyledProjectsDisplayParagraph>
            </div>
          </StyledProjectsDisplayProjectContainer>
          <StyledProjectsDisplayLinkContainer>
            <StyledProjectsDisplayLink
              href={props.display.external.code.path}
              target='_blank'
            >
              {props.display.external.code.message}
            </StyledProjectsDisplayLink>
            <StyledProjectsDisplayLink
              href={props.display.external.website.path}
              target='_blank'
            >
              {props.display.external.website.message}
            </StyledProjectsDisplayLink>
          </StyledProjectsDisplayLinkContainer>
        </StyledProjectsDisplayProject>
      )}
    </StyledProjectsDisplay>
  );
};

export default ProjectsDisplay;
