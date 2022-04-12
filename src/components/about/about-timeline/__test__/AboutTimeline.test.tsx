import { render, screen } from '@testing-library/react';
import AboutTimeline from '../AboutTimeline';

describe('AboutTimeline', () => {
  const testAboutTimelineProps = {
    timeline: {
      description: {
        body: '--body',
        title: '--title'
      },
      markers: [
        {
          technology: '--marker-technology-h3',
          projects: [
            {
              project: {
                title: '--project-title-a',
                path: '--project-path'
              }
            }
          ]
        }
      ]
    }
  };

  test('expect a AboutTimeline component to be rendered', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
  });

  test('expect the AboutTimeline component to be rendered with an h2 and a paragraph', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('about-timeline')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '--title' })
    ).toBeInTheDocument();
    expect(screen.getByRole('about-timeline-body')).toBeInTheDocument();
    expect(screen.getByRole('about-timeline-timeline')).toBeInTheDocument();
  });

  test('expect the AboutTimeline component to be rendered with elements that match the passed in object prop', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('heading', { name: '--title' })).toHaveTextContent(
      testAboutTimelineProps.timeline.description.title
    );

    expect(screen.getByRole('about-timeline-body')).toHaveTextContent(
      testAboutTimelineProps.timeline.description.body
    );
  });

  test('expect the AboutTimeline component to be rendered with a timeline that has (1) h3 and (1) link elements', () => {
    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(screen.getByRole('about-timeline-timeline')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: testAboutTimelineProps.timeline.markers[0].technology
      })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  test('expect the AboutTimeline components timeline to be rendered with elements that match the passed in object prop', () => {
    testAboutTimelineProps.timeline.markers.push({
      technology: '--markerB-technology-h3',
      projects: [
        {
          project: {
            title: '--projectA-title-a',
            path: '--projectA-path'
          }
        },
        {
          project: {
            title: '--projectB-title-a',
            path: '--projectB-path'
          }
        },
        {
          project: {
            title: '--projectC-title-a',
            path: '--projectC-path'
          }
        }
      ]
    });

    render(<AboutTimeline timeline={{ ...testAboutTimelineProps.timeline }} />);

    expect(
      screen.getByRole('heading', {
        name: testAboutTimelineProps.timeline.markers[0].technology
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: testAboutTimelineProps.timeline.markers[1].technology
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: testAboutTimelineProps.timeline.markers[0].projects[0].project
          .title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(
        testAboutTimelineProps.timeline.markers[0].projects[0].project.path
      )
    );
    expect(
      screen.getByRole('link', {
        name: testAboutTimelineProps.timeline.markers[1].projects[0].project
          .title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(
        testAboutTimelineProps.timeline.markers[1].projects[0].project.path
      )
    );
    expect(
      screen.getByRole('link', {
        name: testAboutTimelineProps.timeline.markers[1].projects[1].project
          .title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(
        testAboutTimelineProps.timeline.markers[1].projects[1].project.path
      )
    );
    expect(
      screen.getByRole('link', {
        name: testAboutTimelineProps.timeline.markers[1].projects[2].project
          .title
      })
    ).toHaveAttribute(
      'href',
      expect.stringContaining(
        testAboutTimelineProps.timeline.markers[1].projects[2].project.path
      )
    );
  });
});
