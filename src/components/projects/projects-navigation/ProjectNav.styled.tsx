import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//ProjectNav
const StyledProjectNav = styled.section.attrs(() => ({
  role: 'project-navigation'
}))``;

export default StyledProjectNav;
//

//ProjectNav Elements
const StyledProjectNavButton = styled.button``;
const StyledProjectNavLink = styled(NavLink)``;
const StyledProjectNavList = styled.ul``;

export { StyledProjectNavButton, StyledProjectNavLink, StyledProjectNavList };
//
