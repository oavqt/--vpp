import { screen } from '@testing-library/react';
import renderWithRouter from '../../../setup/jest/utility/routes/routes';
import About from '../About';

describe('About', () => {
  test('expect a About component to be rendered', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('about')).toBeInTheDocument();
  });

  test('expect the About component to be rendered with a AboutInformation component', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('about-information')).toBeInTheDocument();
  });

  test('expect the About component to be rendered with a AboutTechnology component', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
  });

  test('expect the About component to be rendered with a AboutTimeline component', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
  });
});
