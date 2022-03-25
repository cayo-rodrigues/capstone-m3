import styled from "styled-components";

export const ContainerChat = styled.li`
  * {
    margin: 0 auto;
  }
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  min-height: 70px;
  word-break: break-all;
  padding: 10px;
  margin-top: 0px;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0px;
  color: #000;
  list-style: none;
  background-color:#fff;
  transition: 1s all;
  :hover{
    background-color: var(--color-primary);
    transition: 1s all;
    color: white;
  }
  > h3 {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 200px;
  }
  > p {
    color: var(--grey);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    align-content: flex-start;
    width: auto;
  }
`;
