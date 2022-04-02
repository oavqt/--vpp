import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
import userEvent from '@testing-library/user-event';

describe('Projects', () => {
  test('expect a Projects component to be rendered', () => {
    render(<Projects />);

    expect(screen.getByRole('projects')).toBeInTheDocument();
  });

  test('expect the Projects component initial render to be rendered with a landing', () => {
    render(<Projects />);

    expect(screen.getByRole('projects-display-landing')).toBeInTheDocument();
  });

  describe('ProjectsNav ProjectsDisplay --Functionality', () => {
    test('expect ProjectsDisplay to display a project when clicking on a button from ProjectsNav', () => {
      render(<Projects />);

      userEvent.click(screen.getByRole('button'));

      expect(screen.getByRole('projects-display-project')).toBeInTheDocument();
    });
  });
});
