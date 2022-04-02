import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  test('expect a Projects component to be rendered', () => {
    render(<Projects />);

    expect(screen.getByRole('projects')).toBeInTheDocument();
  });

  test('expect the Projects component initial render to be rendered with a landing', () => {
    render(<Projects />);

    expect(screen.getByRole('projects-display-landing')).toBeInTheDocument();
  });
});
