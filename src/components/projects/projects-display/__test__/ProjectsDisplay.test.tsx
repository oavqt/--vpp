import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import ProjectsDisplay from '../ProjectsDisplay';

describe('ProjectsDisplay', () => {
  const testProjectsDisplayProps = {
    assets: {
      image: {
        alt: '--alt',
        src: '--src'
      },
      technology: [
        {
          alt: '--technology-alt',
          src: '--technology-src'
        }
      ]
    },
    description: {
      body: '--title',
      title: '--body'
    },
    internal: {
      active: false,
      empty: false,
      inactive: false
    },
    external: {
      code: {
        message: '--code',
        path: '--code'
      },
      website: {
        message: '--website',
        path: '--website'
      }
    }
  };

  test('expect a ProjectsDisplay component to be rendered', () => {
    renderWithRouter(
      <ProjectsDisplay display={{ ...testProjectsDisplayProps }} />
    );

    expect(screen.getByRole('projects-display')).toBeInTheDocument();
  });

  test('expect the ProjectsDisplay component to be rendered with a header, paragraph, (2) image, and (2) link elements', () => {
    renderWithRouter(
      <ProjectsDisplay display={{ ...testProjectsDisplayProps }} />
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(
      screen.getByRole('projects-display-description-body')
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  test('expect the ProjectsDisplay component to be rendered with elements that match the passed in object prop', () => {
    renderWithRouter(
      <ProjectsDisplay display={{ ...testProjectsDisplayProps }} />
    );

    expect(
      screen.getByRole('heading', {
        name: testProjectsDisplayProps.description.title
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('projects-display-description-body')
    ).toHaveTextContent(testProjectsDisplayProps.description.body);

    expect(screen.getByRole('img', { name: '--alt' })).toHaveAttribute(
      'src',
      expect.stringContaining('--src')
    );
    expect(
      screen.getByRole('img', { name: '--technology-alt' })
    ).toHaveAttribute('src', expect.stringContaining('--technology-src'));

    expect(
      screen.getByRole('link', {
        name: testProjectsDisplayProps.external.code.message
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(testProjectsDisplayProps.external.code.path)
    );

    expect(
      screen.getByRole('link', {
        name: testProjectsDisplayProps.external.website.message
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(testProjectsDisplayProps.external.website.path)
    );
  });
});
