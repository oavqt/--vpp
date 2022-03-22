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
  });
});
