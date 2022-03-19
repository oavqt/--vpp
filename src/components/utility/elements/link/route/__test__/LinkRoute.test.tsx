import { screen } from '@testing-library/react';
import renderWithRouter from '../../../../../../setup/jest/utility/routes/routes';
import LinkRoute from '../LinkRoute';

describe('LinkRoute', () => {
  const tempPath = {
    path: '/'
  };

  test('expect a LinkRoute component to be rendered', () => {
    renderWithRouter(<LinkRoute path={tempPath.path} />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
