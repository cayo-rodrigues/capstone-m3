import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0px auto;
  padding: 10px 0;

  .inputDiv {
    max-width: 90%;
    margin: 0 auto;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    border-radius: 30px;
    border: 2px solid transparent;
    transition: all 0.25s ease-in-out;

    input,
    button {
      border: 0;
    }
    input {
      padding: 15px 10px 15px 20px;
      width: 90%;
      height: 100%;
      font-size: 1rem;
      border: 2px solid transparent;
      border-right: 0;
      background: transparent;
      flex: 1;
    }
    button {
      background-color: var(--color-primary);
      color: var(--white);
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      transition: 1s all;
      justify-content: center;
      border-radius: 50%;
      margin-right: 2px;
      :hover {
        transition: 1s all;
        background-color: var(--color-aux);
      }
      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    :focus-within {
      border: 2px solid var(--lightgrey);
    }
  }

  @media screen and (min-width: 760px) {
    max-width: 40%;
    margin: 0;
  }
`;
