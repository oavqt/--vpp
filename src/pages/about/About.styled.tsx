import styled from 'styled-components';

//About
const StyledAbout = styled.section.attrs(() => ({ role: 'about' }))`
  align-items: center;
  animation: --fade-in 0.2s ease-in-out;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  margin-right: 2em;
  width: 100%;

  @media screen and (max-width: 969px) {
    align-items: flex-start;
    margin-right: 1em;
    overflow-y: scroll;
  }

  @media screen and (min-width: 969px) and (max-height: 869px) {
    align-items: flex-start;
    overflow-y: scroll;
  }
`;

export default StyledAbout;
//

//About Elements
const StyledAboutGrid = styled.div`
  align-items: center;
  display: grid;
  gap: 2em;
  grid: repeat(2, auto) / 1.5fr 1fr;
  grid-template-areas: 'information technology' 'timeline timeline';
  justify-content: center;

  @media screen and (max-width: 969px) {
    display: flex;
    flex-direction: column;
  }
`;

export { StyledAboutGrid };
//
