import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import HomeLanding from '../HomeLanding';

describe('HomeLanding', () => {
  test('expect a HomeLanding component to be rendered', () => {
    renderWithRouter(<HomeLanding />);

    expect(screen.getByRole('home-landing')).toBeInTheDocument();
  });

  test('expect the HomeLanding component to be rendered with (3) images and the welcome title(dieu te bénisse)', () => {
    renderWithRouter(<HomeLanding />);

    expect(screen.getAllByRole('img')).toHaveLength(3);

    expect(screen.getByText('dieu te bénisse')).toBeInTheDocument();
  });
});
