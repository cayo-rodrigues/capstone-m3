import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.isprimary === true
      ? "var(--color-primary)"
      : "var(--color-secondary)"};
  color: ${(props) => props.color};
  height: ${(props) => props.heigth};
  border-radius: 26px;
  font-size: 18px;
  border: 2px solid
    ${(props) =>
      props.isprimary === true
        ? "var(--color-primary)"
        : "var(--color-secundary)"};
  width: ${(props) => props.width};
  opacity: ${(props) => props.active ? 1 : 0.5};
  :hover {
    border: 2px solid var(--color-primary-focus);
  }
  @media (max-width: 400px) {
    width: ${(props) => props.mobile};
  }
`;
