import { render, screen } from '@testing-library/react';
import AboutTechnology from '../AboutTechnology';

describe('AboutTechnology', () => {
  const testAboutTechnologyProps = {
    technology: {
      description: {
        body: '--body',
        title: '--title'
      },
      images: [
        {
          alt: '-0-alt',
          description: '--0',
          id: '-0-id',
          src: '-0-src'
        }
      ]
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

  test('expect the AboutTechnology component to be rendered with a img, h2, and a paragraph', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(0);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('about-technology-body')).toBeInTheDocument();
  });

  test('expect the AboutTechnology component to be rendered with elements that match the passed in object prop', () => {
    render(
      <AboutTechnology
        technology={{ ...testAboutTechnologyProps.technology }}
      />
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      testAboutTechnologyProps.technology.description.title
    );

    expect(
      screen.getByRole('img', {
        name: testAboutTechnologyProps.technology.images[0].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(testAboutTechnologyProps.technology.images[0].src)
    );

    expect(screen.getByRole('about-technology-body')).toHaveTextContent(
      testAboutTechnologyProps.technology.description.body
    );
  });
});
