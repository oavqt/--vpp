import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import Nav from '../Nav';

describe('Nav', () => {
  test('expect a Nav component to be rendered', () => {
    renderWithRouter(<Nav />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('expect the Nav component to be rendered with a home, about, contact, and project link(4)', () => {
    renderWithRouter(<Nav />);

    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('projects')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
