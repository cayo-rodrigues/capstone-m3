import styled from "styled-components";

// lembre-se de usar html semântico
import RegisterSvg from "../../assets/svg/Cadastro.svg"

// lembre-se de usar html semântico
export const RegisterContainer = styled.main`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(202deg,var(--color-primary) 25%,white 24%);

    div{
        height: 100%;
        min-height: 100vh; 
        flex-basis: 50%;

    }
    .col-right{
        >div{
            height: 100%;
            background-image: url(${RegisterSvg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 88%;
        }

    }
    .col-left{
        height: 100%;

    }
`;

