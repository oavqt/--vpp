import { render, screen } from '@testing-library/react';
import AboutInformation from '../AboutInformation';

describe('AboutInformation', () => {
  const testAboutInformationProps = {
    information: {
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

  test('expect a AboutInformation component to be rendered', () => {
    render(
      <AboutInformation
        information={{ ...testAboutInformationProps.information }}
      />
    );

    expect(screen.getByRole('about-information')).toBeInTheDocument();
  });

  test('expect the AboutInformation component to be rendered with a img, h2, and a paragraph', () => {
    render(
      <AboutInformation
        information={{ ...testAboutInformationProps.information }}
      />
    );

    expect(screen.getByRole('about-information')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('about-information-body')).toBeInTheDocument();
  });

  test('expect the AboutInformation component to be rendered with elements that match the passed in object prop', () => {
    render(
      <AboutInformation
        information={{ ...testAboutInformationProps.information }}
      />
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      testAboutInformationProps.information.description.title
    );

    expect(
      screen.getByRole('img', {
        name: testAboutInformationProps.information.images[0].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(
        testAboutInformationProps.information.images[0].src
      )
    );

    expect(screen.getByRole('about-information-body')).toHaveTextContent(
      testAboutInformationProps.information.description.body
    );
  });
});
