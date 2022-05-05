import styled from 'styled-components';

//Projects
const StyledProjects = styled.section.attrs(() => ({ role: 'projects' }))`
  align-items: center;
  animation: --fade-in 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-right: 2em;
  width: 100%;

  @media screen and (max-width: 969px) {
    margin-right: 1em;
  }
`;

export default StyledProjects;
//
