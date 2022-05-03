import styled from 'styled-components';

const StyledHome = styled.section.attrs(() => ({
  role: 'home'
}))`
  align-items: center;
  animation: --fade-in 0.2s ease-in-out;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default StyledHome;
