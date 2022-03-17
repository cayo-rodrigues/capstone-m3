import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
  display: flex;
  position: static;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-aux);
  color: #fff;
  font-family: var(--font-title);
  height: 50px;
  a:visited {
    color: #fff;
  }
  img{
    width: 20px;
  }

`;
