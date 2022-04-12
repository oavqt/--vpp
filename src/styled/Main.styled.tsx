import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const StyledMain = styled.createGlobalStyle`
  @keyframes --nav-inactive {
    0% {
      box-shadow: 0 1rem 1rem 0 #ffb7c3;
      transform: translateY(-0.2rem);
    }
    100% {
      box-shadow: unset;
      transform: translateY(0rem);
    }
  }

  .--projects-nav-active {
    background: #ffb7c3 !important;
    box-shadow: 0 1rem 1rem 0 #ffb7c3;
    transform: translateY(-0.2rem);
  }

  .--projects-nav-inactive {
    animation: --nav-inactive 0.2s ease-in-out;
  }

  body {
    color: #313131;
    font-family: 'Poppins', sans-serif;
  }

  .root {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
`;

export default StyledMain;
