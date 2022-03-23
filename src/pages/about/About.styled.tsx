import styled from 'styled-components';

//About
const StyledAbout = styled.section.attrs(() => ({ role: 'about' }))`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: auto;
  width: 75vw;
`;

export default StyledAbout;
//

//About Elements
const StyledAboutGrid = styled.div`
  align-items: center;
  display: grid;
  gap: 2em;
  grid: repeat(2, auto) / 3fr 1fr;
  grid-template-areas: 'description timeline' 'technology timeline';
  justify-content: center;
`;

export { StyledAboutGrid };
//
