import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import ContactLanding from '../ContactLanding';

describe('ContactLanding', () => {
  const testContactLandingProps = {
    landing: {
      images: [
        {
          alt: '-0-alt',
          description: '--0',
          id: '-0-id',
          src: '-0-src'
        },
        {
          alt: '--1-alt',
          description: '--1',
          id: '--1-id',
          src: '--1-src'
        },
        {
          alt: '2-alt',
          description: '2',
          id: '--2-id',
          src: '--2-src'
        }
      ],
      message: {
        primary: '--0'
      }
    }
  };

  test('expect a ContactLanding component to be rendered', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(screen.getByRole('contact-landing')).toBeInTheDocument();
  });

  test('expect the ContactLanding component to be rendered with (3) images and the welcome title', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(screen.getAllByRole('img')).toHaveLength(3);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('expect the ContactLanding component to be rendered with elements that match the passed in object prop', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(
      screen.getByRole('img', {
        name: testContactLandingProps.landing.images[0].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(testContactLandingProps.landing.images[0].src)
    );
    expect(
      screen.getByRole('img', {
        name: testContactLandingProps.landing.images[1].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(testContactLandingProps.landing.images[1].src)
    );
    expect(
      screen.getByRole('img', {
        name: testContactLandingProps.landing.images[2].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(testContactLandingProps.landing.images[2].src)
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      testContactLandingProps.landing.message.primary
    );
  });
});
