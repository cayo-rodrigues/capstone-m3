import styled from "styled-components";
import LoginSvg from "../../assets/svg/Login.svg"

// lembre-se de usar html semântico
export const LoginContainer = styled.main`
    display: flex;
    justify-content: space-between;
    background:linear-gradient(151deg,var(--color-primary) 34%,white 34%);

    div{
        height: 100%;
        min-height: 100vh; 
        flex-basis: 50%;

    }
    .col-left{
        >div{
            height: 100%;
            background-image: url(${LoginSvg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: 88%;
        }

    }
    .col-right{
        height: 100%;

    }
`;
