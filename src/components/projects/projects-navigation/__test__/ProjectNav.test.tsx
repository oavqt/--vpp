import { render, screen } from '@testing-library/react';
import ProjectNav from '../ProjectNav';

describe('ProjectNav', () => {
  const testHelperGenerateProjectObjects = (length: number) => {
    const toilet = [];

    for (let i = 0; i < length; i++) {
      toilet.push({
        assets: {
          image: '',
          technology: ''
        },
        description: {
          body: '',
          title: ''
        },
        external: {
          code: '',
          live: ''
        }
      });
    }

    return toilet;
  };

  const testProjectNavProps = {
    display: {
      displayProject: jest.fn(() => {
        return;
      })
    },
    navigation: {
      projects: testHelperGenerateProjectObjects(1)
    }
  };

  test('expect a ProjectNav component to be rendered', () => {
    render(
      <ProjectNav
        display={testProjectNavProps.display}
        navigation={testProjectNavProps.navigation}
      />
    );

    expect(screen.getByRole('project-navigation')).toBeInTheDocument();
  });

  test('expect the ProjectNav component to be rendered with (1) buttons', () => {
    render(
      <ProjectNav
        display={testProjectNavProps.display}
        navigation={testProjectNavProps.navigation}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  test('expect the ProjectNav component to be rendered with (3) buttons', () => {
    testProjectNavProps.navigation.projects =
      testHelperGenerateProjectObjects(4);

    render(
      <ProjectNav
        display={testProjectNavProps.display}
        navigation={testProjectNavProps.navigation}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(4);
  });
});
