import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
    background-color: #04164d;
    display: flex;
    top: 0;
    left: 0;
    position: sticky;
    width: 100%;
    justify-content: center;
    z-index: 99999;
`;

export const ContainerHeader = styled.header`
    display: flex;
    width: 100%;
    max-width: 1440px;
    border-top: 96px;
    justify-content: space-between;
    padding-top: 15px;
    padding-right: 10px;

    .currentPage {
        font-weight: bold;
    }

    img {
        cursor: pointer;
    }

    @media screen and (max-width: 360px) {
        figure {
            img {
                width: 240px;
            }
        }
    }

    @media (min-width: 550px) {
        figure {
            margin-right: 5%;
        }
    }

    @media (max-width: 925px) {
        figure {
            margin-right: unset;
        }

        button {
            width: 140px;
        }
    }
`;

export const Nav = styled.nav`
    padding-top: 10px;
    display: none;

    @media (min-width: 760px) {
        display: unset;
    }
`;
