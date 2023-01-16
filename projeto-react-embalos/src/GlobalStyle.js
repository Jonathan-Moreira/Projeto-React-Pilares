import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    --soft-white: #f2f2f2;
    --green: #8bcf21;
    --yellow: #ffcb12;
    --dark: #383b40;
    --deep-blue: #011640;
    --deep_blue-secondary: #010F2B;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--green);
    font-size:30px;
}

h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--yellow);   
}

h3 {
    font-size: 10px;
}


body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--deep-blue);
    color: var(--soft-white);
}

*{
    margin:0;
    padding:0;
}

img {
    height: 200px;
    padding: 20px;
    
}


`