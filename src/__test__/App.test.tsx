import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../setup/jest/utility/routes/routes';

describe('App', () => {
  describe('App routes', () => {
    test('expect the Home component to be rendered on route(/)', () => {
      renderWithRouter(<App />, { route: '/' });

      expect(screen.getByRole('home')).toBeInTheDocument();
    });

    test('expect the About component to be rendered on route(/about)', () => {
      renderWithRouter(<App />, { route: 'about' });

      expect(screen.getByRole('about')).toBeInTheDocument();
    });

    test('expect the Contact component to be rendered on route(/contact)', () => {
      renderWithRouter(<App />, { route: 'contact' });

      expect(screen.getByRole('contact')).toBeInTheDocument();
    });
  });
});
