import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import ContactLanding from '../ContactLanding';

describe('ContactLanding', () => {
  const testContactLandingProps = {
    landing: {
      message: {
        primary: '--0'
      },
      social: [
        {
          title: '--titleA',
          path: '--pathA'
        },
        {
          title: '--titleB',
          path: '--pathB'
        },
        {
          title: '--titleC',
          path: '--pathC'
        }
      ]
    }
  };

  test('expect a ContactLanding component to be rendered', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(screen.getByRole('contact-landing')).toBeInTheDocument();
  });

  test('expect the ContactLanding component to be rendered with (3) links and the welcome title', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('expect the ContactLanding component to be rendered with elements that match the passed in object prop', () => {
    renderWithRouter(
      <ContactLanding landing={{ ...testContactLandingProps.landing }} />
    );

    expect(
      screen.getByRole('link', {
        name: testContactLandingProps.landing.social[0].title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(testContactLandingProps.landing.social[0].path)
    );
    expect(
      screen.getByRole('link', {
        name: testContactLandingProps.landing.social[1].title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(testContactLandingProps.landing.social[1].path)
    );
    expect(
      screen.getByRole('link', {
        name: testContactLandingProps.landing.social[2].title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(testContactLandingProps.landing.social[2].path)
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      testContactLandingProps.landing.message.primary
    );
  });
});
