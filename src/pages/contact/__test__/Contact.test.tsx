import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Contact from '../Contact';

describe('Contact', () => {
  test('expect a Contact component to be rendered', () => {
    renderWithRouter(<Contact />);

    expect(screen.getByRole('contact')).toBeInTheDocument();
  });

  test('expect the Contact component to be rendered with a ContactLanding component', () => {
    renderWithRouter(<Contact />);

    expect(screen.getByRole('contact-landing')).toBeInTheDocument();
  });
});
