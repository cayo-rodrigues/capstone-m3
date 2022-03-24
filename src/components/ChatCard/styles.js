import styled from "styled-components";

export const ContainerChat = styled.li`
  * {
    margin: 0 auto;
  }
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 100vw;
  word-break: break-all;
  padding: 10px;
  margin-top: 5px;
  border-bottom: 2px solid var(--grey);
  border-radius: 10px;
  background-color: var(--lightgrey);
  list-style: none;
  > h3 {
    font-size: 18px;
  }
  > p {
    color: var(--grey);
  }
  > span {
    color: var(--grey);
  }
  @media (min-width: 768px) {
    align-content: flex-start;
    width: auto;
  }
`;
