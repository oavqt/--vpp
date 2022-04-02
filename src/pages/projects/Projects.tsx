import { FC, useEffect, useReducer, useState } from 'react';
import assets from '../../assets/assets';
import ProjectsDisplay from '../../components/projects/projects-display/ProjectsDisplay';
import ProjectsNav from '../../components/projects/projects-navigation/ProjectsNav';
import StyledProjects from './Projects.styled';

//ProjectObject Type
interface ProjectObject {
  empty?: boolean;
  assets: {
    image: {
      alt: string;
      src: string;
    };
    technology: {
      alt: string;
      src: string;
    }[];
  };
  description: {
    body: string;
    title: string;
  };
  external: {
    code: {
      message: string;
      path: string;
    };
    website: {
      message: string;
      path: string;
    };
  };
}

export { type ProjectObject };
//

//Project State and Action Types
interface ProjectState {
  project: ProjectObject;
}

interface ProjectAction {
  payload?: ProjectObject;
  type: string;
}

export { type ProjectAction };
//

const initialProject = {
  project: {
    empty: true,
    assets: {
      image: {
        alt: '',
        src: ''
      },
      technology: [
        {
          alt: '',
          src: ''
        }
      ]
    },
    description: {
      body: '',
      title: ''
    },
    external: {
      code: {
        message: '',
        path: ''
      },
      website: {
        message: '',
        path: ''
      }
    }
  }
};

const reducer = (state: ProjectState, action: ProjectAction) => {
  switch (action.type) {
    case 'replace': {
      if (action.payload) return { project: { ...action.payload } };
      else return state;
    }
    case 'init': {
      return {
        project: {
          ...state.project,
          description: {
            body: assets.pages.projects.description.body,
            title: assets.pages.projects.description.title
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

const Projects: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialProject);
  const [projects, setProjects] = useState<Array<ProjectObject>>([]);

  useEffect(() => {
    const updateProjects = (): void => {
      setProjects(assets.pages.projects.display);
    };

    dispatch({ type: 'init' });
    updateProjects();
  }, []);

  return (
    <StyledProjects>
      <ProjectsDisplay display={{ ...state.project }} />
      <ProjectsNav display={{ dispatch }} navigation={{ projects: projects }} />
    </StyledProjects>
  );
};

export default Projects;
