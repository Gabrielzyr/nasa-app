import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: linear-gradient(20deg, rgba(2,0,36,1) 0%, rgba(65,9,121,1) 50%, rgba(162,0,255,1) 100%);;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  //padrão - font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

  }

  body {
    background: var(--background) no-repeat ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 8.6;
    cursor: not-allowed;
  }
`;