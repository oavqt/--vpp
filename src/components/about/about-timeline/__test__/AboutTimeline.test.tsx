import { render, screen } from '@testing-library/react';
import AboutTimeline from '../AboutTimeline';

describe('AboutTimeline', () => {
  const testAboutTimelineProps = {
    timeline: {
      description: {
        body: '--body',
        title: '--title'
      },
      images: [
        {
          alt: '-0-alt',
          description: '--0',
          id: '-0-id',
          src: '-0-src'
        }
      ]
    }
  };

  test('expect a AboutTimeline component to be rendered', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
  });

  test('expect the AboutTimeline component to be rendered with a img, h2, and a paragraph', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(0);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('about-timeline-body')).toBeInTheDocument();
  });

  test('expect the AboutTimeline component to be rendered with elements that match the passed in object prop', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      testAboutTimelineProps.timeline.description.title
    );

    expect(
      screen.getByRole('img', {
        name: testAboutTimelineProps.timeline.images[0].alt
      })
    ).toHaveAttribute(
      'src',
      expect.stringContaining(testAboutTimelineProps.timeline.images[0].src)
    );

    expect(screen.getByRole('about-timeline-body')).toHaveTextContent(
      testAboutTimelineProps.timeline.description.body
    );
  });
});
