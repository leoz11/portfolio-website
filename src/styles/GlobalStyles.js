// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.theme === 'dark' ? '#09090B' : '#fff')};
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#09090B')};
  }
`;

export default GlobalStyle;
