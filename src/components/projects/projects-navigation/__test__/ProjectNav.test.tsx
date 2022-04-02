import { render, screen } from '@testing-library/react';
import ProjectNav from '../ProjectsNav';

describe('ProjectsNav', () => {
  const testHelperGenerateProjectsObjects = (length: number) => {
    const toilet = [];

    for (let i = 0; i < length; i++) {
      toilet.push({
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
      });
    }

    return toilet;
  };

  const testProjectsNavProps = {
    navigation: {
      projects: testHelperGenerateProjectsObjects(1)
    }
  };

  test('expect a ProjectsNav component to be rendered', () => {
    render(<ProjectNav navigation={testProjectsNavProps.navigation} />);

    expect(screen.getByRole('projects-navigation')).toBeInTheDocument();
  });

  test('expect the ProjectsNav component to be rendered with (1) buttons', () => {
    render(<ProjectNav navigation={testProjectsNavProps.navigation} />);

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  test('expect the ProjectsNav component to be rendered with (3) buttons', () => {
    testProjectsNavProps.navigation.projects =
      testHelperGenerateProjectsObjects(4);

    render(<ProjectNav navigation={testProjectsNavProps.navigation} />);

    expect(screen.getAllByRole('button')).toHaveLength(4);
  });
});
