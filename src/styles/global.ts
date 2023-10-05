import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Roboto', serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }
`;
