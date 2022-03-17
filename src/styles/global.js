import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary: #002d9b;
    --color-secondary: #43568d;
    --color-aux: #04164d;
    --color-bg: #8396cd;

    --white: #fff;
    --black: #000;
    --error: #E4266F;

    --font-text:'Inter', sans-serif;;
    --font-title:'Montserrat', sans-serif;
  }

  body, button, input, ::placeholder {
    font-family: var(--font-text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
