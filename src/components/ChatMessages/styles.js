import styled from "styled-components";

export const BoxChat = styled.div`
  border: 1px solid;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: var(--whitesmoke);
  > button {
    border-radius: 50%;
    width: 20vw;
    height: 20vw;
    padding: 15px;
    font-size: 28px;
    margin: 0 auto;
    margin-top: 10px;
    border: none;
    background-color: var(--color-aux);
    color: var(--white);
  }
`;

export const BoxMessages = styled.div`
  border-bottom: 3px solid var(--darkblue);
  max-width: 100vw;
  height: 100%;
  padding: 15px;
  word-break: break-all;
  font-size: 20px;
`;

export const BoxInput = styled.div`
  align-self: flex-end;
  width: 100%;
  margin-top: 10px;
  > textarea {
    font-size: 18px;
    padding: 5px;
    line-height: 40px;
    min-width: 90vw;
    margin: 10px;
    box-shadow: inset 0 0 1em var(--color-bg);
    border-radius: 5px;
  }
  > button {
    position: relative;
    left: 20vw;
    margin-bottom: 30px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
