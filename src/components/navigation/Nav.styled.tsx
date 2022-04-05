import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//Nav
const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export default StyledNav;
//

//Nav Elements
const StyledNavLink = styled(NavLink)`
  color: #313131;
  text-decoration: none;

  &.active {
    color: #ffb7c3;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 12vh;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
`;

const StyledNavSection = styled.section.attrs(() => ({
  role: 'nav'
}))`
  height: 100vh;
  position: absolute;
  width: 12vw;
`;

export { StyledNavLink, StyledNavList, StyledNavSection };
//
