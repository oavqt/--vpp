import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledProjectNav, {
  StyledProjectNavButton,
  StyledProjectNavList
} from './ProjectNav.styled';

type ProjectNavObject = {
  assets: {
    image: string;
    technology: string;
  };
  description: {
    body: string;
    title: string;
  };
  external: {
    code: string;
    live: string;
  };
};

interface ProjectNavProps {
  display: {
    // eslint-disable-next-line no-unused-vars
    displayProject: (item: ProjectNavObject) => void;
  };
  navigation: {
    projects: ProjectNavObject[];
  };
}

const ProjectNav: FC<ProjectNavProps> = (props) => {
  return (
    <StyledProjectNav>
      <StyledProjectNavList>
        {props.navigation.projects.map(() => (
          <li key={uuidv4()}>
            <StyledProjectNavButton></StyledProjectNavButton>
          </li>
        ))}
      </StyledProjectNavList>
    </StyledProjectNav>
  );
};

export default ProjectNav;
