import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
        --dark-color:#3c3c3c;
    
        body{
            background-color: #E5E5E5;
        }

        p,h1,h2,h3,h4, th, input, label, textarea,div{
            font-family: 'Poppins', sans-serif;
        }

        textarea:focus, input:focus, bottom:focus{
            box-shadow: 0 0 0 0;
            outline: none;
        }

        ::-webkit-scrollbar {
        width: 0.75rem;
        border-radius: 0.3rem;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 0.3rem;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background-color: #b4b4b4;
            border-radius: 0.3rem;
            height: 1rem;
        }
    }
`