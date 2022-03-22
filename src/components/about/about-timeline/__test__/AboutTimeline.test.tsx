import { render, screen } from '@testing-library/react';
import AboutTimeline from '../AboutTimeline';

describe('AboutTimeline', () => {
  test('expect a AboutTimeline component to be rendered', () => {
    render(<AboutTimeline />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
  });

  test('expect the AboutTimeline component to be rendered with a img, h2, and a paragraph', () => {
    render(<AboutTimeline />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(0);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('about-timeline-information')).toBeInTheDocument();
  });
});
