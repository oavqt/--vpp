import { render, screen } from '@testing-library/react';
import AboutDescription from '../AboutDescription';

describe('AboutDescription', () => {
  test('expect a AboutDescription component to be rendered', () => {
    render(<AboutDescription />);

    expect(screen.getByRole('about-description')).toBeInTheDocument();
  });

  test('expect the AboutDescription component to be rendered with a img, h2, and a paragraph', () => {
    render(<AboutDescription />);

    expect(screen.getByRole('about-description')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(
      screen.getByRole('about-description-information')
    ).toBeInTheDocument();
  });
});
