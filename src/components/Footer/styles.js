import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: space-around;
  background-color: var(--color-aux);
  color: #fff;
  font-family: var(--font-title);
  height: 50px;
  a:visited {
    color: #fff;
  }
`;
