import { Dispatch, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProjectAction, ProjectObject } from '../../../pages/projects/Projects';
import StyledProjectsNav, {
  StyledProjectsNavButton,
  StyledProjectsNavList,
  StyledProjectsNavListItem
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
        {props.navigation.projects.map((item, index) => (
          <StyledProjectsNavListItem key={uuidv4()}>
            <StyledProjectsNavButton
              onClick={() => {
                props.display?.dispatch
                  ? props.display.dispatch({
                      type: 'set active',
                      payload: {
                        current: { ...item },
                        index: index
                      }
                    })
                  : '';

                props.display?.dispatch
                  ? props.display.dispatch({
                      type: 'set current',
                      payload: {
                        current: { ...item },
                        index: index
                      }
                    })
                  : '';
              }}
              className={
                item.internal.active
                  ? '--projects-nav-active'
                  : item.internal.inactive
                  ? '--projects-nav-inactive'
                  : ''
              }
            ></StyledProjectsNavButton>
          </StyledProjectsNavListItem>
        ))}
      </StyledProjectsNavList>
    </StyledProjectsNav>
  );
};

export default ProjectsNav;
