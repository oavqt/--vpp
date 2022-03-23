import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const StyledMain = styled.createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  .app {
    height: 100vh;
    width: 100vw;
  }
`;

export default StyledMain;
