import styled from "styled-components";

export const Container = styled.div`
  > span {
    margin: 0 auto;
    font-size: 15px;
    color: var(--grey);
  }
`;

export const Content = styled.div`
  margin: 15px 0 0 0;
  .message-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > span {
    color: var(--color-primary);
    font-size: 18px;
  }
  > p {

    background-color: var(--lightgrey);
    padding: 20px;

    border-radius: 30px;
    font-size: 18px;
    margin-top: 5px;
  }
`;
