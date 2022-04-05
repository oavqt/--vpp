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
    test('expect ProjectNavs button to cycle between classnames --project-nav-active, --project-nav-inactive, and no classname', () => {
      render(<Projects />);

      userEvent.click(screen.getAllByRole('button')[0]);

      expect(screen.getAllByRole('button')[0]).toHaveClass(
        '--projects-nav-active'
      );

      userEvent.click(screen.getAllByRole('button')[1]);

      expect(screen.getAllByRole('button')[0]).not.toHaveClass(
        '--projects-nav-active'
      );
      expect(screen.getAllByRole('button')[0]).toHaveClass(
        '--projects-nav-inactive'
      );

      userEvent.click(screen.getAllByRole('button')[2]);

      expect(screen.getAllByRole('button')[0]).not.toHaveClass(
        '--projects-nav-active'
      );
      expect(screen.getAllByRole('button')[0]).not.toHaveClass(
        '--projects-nav-inactive'
      );
    });

    test('expect ProjectsDisplay to display a project when clicking on a button from ProjectsNav', () => {
      render(<Projects />);

      userEvent.click(screen.getAllByRole('button')[0]);

      expect(screen.getByRole('projects-display-project')).toBeInTheDocument();
    });
  });
});
