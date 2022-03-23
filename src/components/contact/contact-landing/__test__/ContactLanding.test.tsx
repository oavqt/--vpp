import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../setup/jest/utility/routes/routes';
import ContactLanding from '../ContactLanding';

describe('ContactLanding', () => {
  test('expect a ContactLanding component to be rendered', () => {
    renderWithRouter(<ContactLanding />);

    expect(screen.getByRole('contact-landing')).toBeInTheDocument();
  });

  test('expect the ContactLanding component to be rendered with (3) images and the welcome title(dieu te bénisse)', () => {
    renderWithRouter(<ContactLanding />);

    expect(screen.getAllByRole('img')).toHaveLength(3);

    expect(screen.getByText('dieu te bénisse')).toBeInTheDocument();
  });
});
