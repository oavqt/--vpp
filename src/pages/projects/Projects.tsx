import { FC, useEffect, useReducer } from 'react';
import assets from '../../assets/assets';
import ProjectsDisplay from '../../components/projects/projects-display/ProjectsDisplay';
import ProjectsNav from '../../components/projects/projects-navigation/ProjectsNav';
import StyledProjects from './Projects.styled';

//ProjectObject Type
interface ProjectObject {
  assets: {
    image: {
      alt: string;
      src: string;
    };
    technologies: string;
  };
  description: {
    body: string;
    title: string;
  };
  internal: {
    active: boolean;
    empty: boolean;
    inactive: boolean;
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
  project: {
    complete: ProjectObject[];
    current: ProjectObject;
  };
}

interface ProjectAction {
  payload?: {
    current: ProjectObject;
    index: number;
  };
  type: string;
}

export { type ProjectAction };
//

const initialProjectState = () => {
  const queryProjectComplete = assets.pages.projects.display;

  return {
    project: {
      complete: queryProjectComplete,
      current: {
        assets: {
          image: {
            alt: '',
            src: ''
          },
          technologies: ''
        },
        description: {
          body: '',
          title: ''
        },
        internal: {
          active: false,
          empty: true,
          inactive: false
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
    }
  };
};

const reducer = (state: ProjectState, action: ProjectAction) => {
  switch (action.type) {
    case 'init': {
      return {
        project: {
          ...state.project,
          current: {
            ...state.project.current,
            description: {
              body: assets.pages.projects.description.body,
              title: assets.pages.projects.description.title
            }
          }
        }
      };
    }
    case 'set active': {
      const copy = [...state.project.complete];

      copy.forEach((item) => {
        item.internal.active
          ? ((item.internal.active = false), (item.internal.inactive = true))
          : ((item.internal.active = false), (item.internal.inactive = false));
      });

      if (action.payload) {
        copy[action.payload.index].internal.active = true;

        return {
          project: {
            ...state.project,
            complete: [...copy]
          }
        };
      } else return state;
    }
    case 'set current': {
      if (action.payload)
        return {
          project: { ...state.project, current: { ...action.payload.current } }
        };
      else return state;
    }
    default: {
      return state;
    }
  }
};

const Projects: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialProjectState());

  useEffect(() => {
    dispatch({ type: 'init' });

    //return dispatch({type: 'clear'})
  }, []);

  return (
    <StyledProjects>
      <ProjectsDisplay display={{ ...state.project.current }} />
      <ProjectsNav
        display={{ dispatch }}
        navigation={{ projects: state.project.complete }}
      />
    </StyledProjects>
  );
};

export default Projects;
