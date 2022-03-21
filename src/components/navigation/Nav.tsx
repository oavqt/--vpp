import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import StyledNav, {
  StyledNavLink,
  StyledNavList,
  StyledNavSection
} from './Nav.styled';

const Nav: FC = () => {
  return (
    <StyledNavSection>
      <StyledNav>
        <StyledNavList>
          {assets.pages.routes.navigation.map((route) => (
            <li key={uuidv4()}>
              <StyledNavLink to={route.path}>{route.desciption}</StyledNavLink>
            </li>
          ))}
        </StyledNavList>
      </StyledNav>
    </StyledNavSection>
  );
};

export default Nav;
