import styled from 'styled-components';

//ProjectNav
const StyledProjectsNav = styled.section.attrs(() => ({
  role: 'projects-navigation'
}))`
  margin: 2em 0;
  position: fixed;
  top: 0;
`;

export default StyledProjectsNav;
//

//ProjectNav Elements
const StyledProjectsNavButton = styled.button`
  background: #ffb7c3ab;
  border: none;
  border-radius: 50%;
  height: 2em;
  transition: all ease-out 0.2s;
  width: 2em;

  :hover {
    background: #ffb7c3;
    box-shadow: 0 1rem 1rem 0 #ffb7c3;
    cursor: pointer;
    transform: translateY(-0.2rem);
  }
`;
const StyledProjectsNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const StyledProjectsNavListItem = styled.li`
  margin: 0 0.05em;
`;

export {
  StyledProjectsNavButton,
  StyledProjectsNavList,
  StyledProjectsNavListItem
};
//
