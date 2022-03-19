import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import LinkRoute from '../utility/elements/link/route/LinkRoute';
import StyledNav from './Nav.styled';

const Nav: FC = () => {
  return (
    <StyledNav>
      <ul>
        {assets.routes.navigation.map((route) => (
          <li key={uuidv4()}>
            <LinkRoute path={route.path}>{route.desciption}</LinkRoute>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
