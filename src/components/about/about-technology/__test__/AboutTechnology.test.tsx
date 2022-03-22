import { render, screen } from '@testing-library/react';
import AboutTechnology from '../AboutTechnology';

describe('AboutTechnology', () => {
  test('expect a AboutTechnology component to be rendered', () => {
    render(<AboutTechnology />);

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
  });

  test('expect the AboutTechnology component to be rendered with a img, h2, and a paragraph', () => {
    render(<AboutTechnology />);

    expect(screen.getByRole('about-technology')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(0);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(
      screen.getByRole('about-technology-information')
    ).toBeInTheDocument();
  });
});
