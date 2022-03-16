import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--tomAzulEscuro);
        font-family: var(--fontText);
        color: var(--corFonteBranca);
        
    }
   h1, h2 ,h3 , h4 ,h5 , h6 {
        font-family: var(--fontTitle);
   }
    :root{
        --tomAzulIntemediario:#002D9B;
        --tomAzulClaro:#43568D;
        --tomAzulEscuro:#04164D;
        --tomAzulBemClaro:#8396CD;

        --fontText:'Inter', sans-serif;;
        --fontTitle:'Montserrat', sans-serif;

        --corFonteBranca:#fff;
        --corFontePreta:#000;
    }
`

/*
#002D9B (tom de azul intermediário)
#43568D (tom de azul claro)
#04164D (tom de azul mais escuro)
#8396CD (tom de azul bem claro)
 */