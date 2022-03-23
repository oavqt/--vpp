import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Home from '../Home';

describe('Home', () => {
  test('expect a Home component to be rendered', () => {
    renderWithRouter(<Home />);

    expect(screen.getByRole('home')).toBeInTheDocument();
  });

  test('expect the Home component to be rendered with a HomeLanding component', () => {
    renderWithRouter(<Home />);

    expect(screen.getByRole('home-landing')).toBeInTheDocument();
  });
});
