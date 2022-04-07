import styled from 'styled-components';

//About
const StyledAbout = styled.section.attrs(() => ({ role: 'about' }))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

export default StyledAbout;
//

//About Elements
const StyledAboutGrid = styled.div`
  align-items: center;
  display: grid;
  gap: 2em;
  grid: repeat(2, auto) / 3fr 1fr;
  grid-template-areas: 'information timeline' 'technology timeline';
  justify-content: center;
`;

export { StyledAboutGrid };
//
