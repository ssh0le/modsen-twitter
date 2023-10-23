import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', serif;
    }

    html,
    body {
        height: 100%;
        width: 100%;
        font-weight: 400;
        background-color: ${({ theme }) => theme.backgroundColor};
    }

    #root {
        height: 100%;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
    }

    ul {
        list-style: none;
    }
`;
