import { Dispatch, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProjectAction, ProjectObject } from '../../../pages/projects/Projects';
import StyledProjectsNav, {
  StyledProjectsNavButton,
  StyledProjectsNavList
} from './ProjectsNav.styled';

interface ProjectsNavProps {
  display?: {
    // eslint-disable-next-line no-unused-vars
    dispatch?: Dispatch<ProjectAction>;
  };
  navigation: {
    projects: ProjectObject[];
  };
}

const ProjectsNav: FC<ProjectsNavProps> = (props) => {
  return (
    <StyledProjectsNav>
      <StyledProjectsNavList>
        {props.navigation.projects.map(() => (
          <li key={uuidv4()}>
            <StyledProjectsNavButton></StyledProjectsNavButton>
          </li>
        ))}
      </StyledProjectsNavList>
    </StyledProjectsNav>
  );
};

export default ProjectsNav;
