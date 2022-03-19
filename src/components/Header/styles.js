import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-color: #04164d;
  display: flex;
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
`;

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: 100vw;
  border-top: 96px;
  justify-content: space-between;
  padding-top: 15px;
  .currentPage {
    font-weight: bold;
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    figure {
      margin-right: unset;
    }

    button {
      width: 140px;
    }
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: unset;
  }
`;
