//Libs
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    } 

    a {
        text-decoration: none;
    }

    a:active, a:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }

    *:focus {
        outline: none;  
        -moz-outline-style: none; 
    }

    button:active, button:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background-color: ${props => props.theme.colors.lightGrey};
        font-family: 'Poppins', sans-serif;
    }

    textarea:focus, input:focus, button:focus{
        outline: 0!important;
    }
`;