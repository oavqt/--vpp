import styled from 'styled-components';

const StyledContact = styled.section.attrs(() => ({
  role: 'contact'
}))`
  align-items: center;
  animation: --fade-in 0.2s ease-in-out;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default StyledContact;
