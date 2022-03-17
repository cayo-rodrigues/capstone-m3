import styled from "styled-components";

// lembre-se de usar html semântico
import RegisterSvg from "../../assets/svg/Cadastro.svg"

// lembre-se de usar html semântico
export const RegisterContainer = styled.main`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(202deg,var(--color-secondary) 25%,white 24%);
    @media (max-width:850px){
        justify-content: center;
    }
    >div{
        height: 100%;
        min-height: 100vh; 
        flex-basis: 50%;
        @media (max-width:850px){
            flex-basis: 100%;
        }

    }
    .col-right{
        >div{
            min-height: 100vh; 
            height: 100%;
            background-image: url(${RegisterSvg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 80%;
            animation: fadeIn 0.5s;
        }
        @media (max-width:850px){
            display: none;
        }

    }
    .col-left{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

