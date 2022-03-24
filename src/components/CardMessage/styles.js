import styled from "styled-components";

export const Container = styled.div`
  > span {
    margin: 0 auto;
    font-size: 15px;
    color: var(--grey);
  }
`;

export const Content = styled.div`
  > span {
    color: var(--color-primary);
    font-size: 18px;
  }
  > p {
    background-color: var(--lightgrey);
    padding: 2px;
    padding-left: 5px;
    border-radius: 8px;
    font-size: 18px;
    margin-top: 5px;
  }
`;
