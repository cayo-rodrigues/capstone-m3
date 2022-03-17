import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-color: #04164d;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  max-width: 1440px;
  border-top: 96px;
  justify-content: space-between;
  padding-top: 15px;
  padding-right: 10px;
  img {
    cursor: pointer;
  }
  @media (max-width: 910px) {
  }
`;
export const Button = styled.button`
  margin: 0px 9px 0px 9px;
  text-transform: uppercase;
  font-family: var(--font-title);
  font-weight: 500;
  width: 189.55px;
  background: #43568d;
  border-width: initial;
  border-style: none;
  border-radius: 28.75px;
  cursor: pointer;
  height: 57.49px;
  font-size: 16px;
  color: white;
  &:hover {
    background: #002d9b;
  }
  @media (max-width: 910px) {
    width: 140px;
  }
  @media (max-width: 753px) {
    background-color: black;
    width: 140px;
  }
`;

export const Nav = styled.nav`
  padding-top: 10px;
`;
