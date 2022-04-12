import { render, screen } from '@testing-library/react';
import AboutTechnology from '../AboutTechnology';

describe('AboutTechnology', () => {
  const testAboutTechnologyProps = {
    technology: {
      description: {
        body: '--body',
        title: '--title'
      },
      technologies: ['--techA', '--techB', '--techC'],
      tools: ['--toolsA', '--toolsB', '--toolsC']
    }
  };

  test('expect a AboutTechnology component to be rendered', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
  });

  test('expect the AboutTechnology component to be rendered with a h2 and a paragraph', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: testAboutTechnologyProps.technology.description.title
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('about-technology-body')).toBeInTheDocument();
  });

  test('expect the AboutTechnology component to be rendered with elements that match the passed in object prop', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: testAboutTechnologyProps.technology.description.title
      })
    ).toHaveTextContent(testAboutTechnologyProps.technology.description.title);

    expect(screen.getByRole('about-technology-body')).toHaveTextContent(
      testAboutTechnologyProps.technology.description.body
    );
  });

  test('expect the AboutTechnology component to be rendered with technologies and tools', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(
      screen.getByRole('about-technology-technologies')
    ).toBeInTheDocument();
    expect(screen.getByRole('about-technology-tools')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'technologies' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'tools' })).toBeInTheDocument();
  });

  test('expect the AboutTechnology components technologies and tools to be rendered with elements that match the passed in object prop', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    testAboutTechnologyProps.technology.technologies.forEach((technology) => {
      expect(screen.getByText(technology)).toBeInTheDocument();
    });

    testAboutTechnologyProps.technology.tools.forEach((tool) => {
      expect(screen.getByText(tool)).toBeInTheDocument();
    });
  });
});
