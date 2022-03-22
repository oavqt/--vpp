import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import Landing from '../Landing';

describe('Landing', () => {
  test('expect a Landing component to be rendered', () => {
    renderWithRouter(<Landing />);

    expect(screen.getByRole('home-landing')).toBeInTheDocument();
  });

  test('expect the Landing component to be rendered with (3) images and the welcome title(dieu te bénisse)', () => {
    renderWithRouter(<Landing />);

    expect(screen.getAllByRole('img')).toHaveLength(3);

    expect(screen.getByText('dieu te bénisse')).toBeInTheDocument();
  });
});
