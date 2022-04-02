import { FC, Fragment } from 'react';
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
  StyledProjectsDisplayLanding
} from './ProjectsDisplay.styled';

interface ProjectDisplayProps {
  display: ProjectObject;
}

const ProjectsDisplay: FC<ProjectDisplayProps> = (props) => {
  return (
    <StyledProjectsDisplay>
      {props.display.empty ? (
        <Fragment>
          <StyledProjectsDisplayLanding>
            <StyledProjectsDisplayLandingHeading>
              {props.display.description.title}
            </StyledProjectsDisplayLandingHeading>
            <StyledProjectsDisplayLandingParagraph>
              {props.display.description.body}
            </StyledProjectsDisplayLandingParagraph>
          </StyledProjectsDisplayLanding>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <div>
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
            </div>
            <div>
              <StyledProjectsDisplayHeading>
                {props.display.description.title}
              </StyledProjectsDisplayHeading>
              <StyledProjectsDisplayParagraph>
                {props.display.description.body}
              </StyledProjectsDisplayParagraph>
            </div>
          </div>
          <div>
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
          </div>
        </Fragment>
      )}
    </StyledProjectsDisplay>
  );
};

export default ProjectsDisplay;
