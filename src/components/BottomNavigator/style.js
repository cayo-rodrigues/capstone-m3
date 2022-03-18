import styled from "styled-components";

export const NavigatorContainerDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--white);
  transition: 0.5s;
  height: 60px;
  margin-top: 20px;
  span {
    font-size: 10px;
    transition: 0.5s;
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    transition: 0.5s;
    align-items: flex-start;
    padding: 10px;
    li {
      transition: 0.5s;
      text-align: center;
      :hover {
        span {
          transition: 0.5s;
          display: block;
        }
      }
      svg {
        width: 25px;
        transition: 0.5s;
        height: 25px;
      }
    }
  }
  a {
    color: var(--white);
  }
  .selected {
    transition: 0.5s;
    div {
      background-color: white;
      padding: 5px;
      transform: translateY(-35px);
      transition: 0.5s;
      border-radius: 50%;
    }
    p {
      border-radius: 50%;
      padding: 4px;
      width: 45px;
      height: 45px;
      justify-content: center;
      align-items: center;
      display: flex;
      transition: 0.5s;
      background-color: var(--color-secondary);
      svg {
        border-radius: 50%;
      }
    }
    span {
      transform: translateY(-30px);
      transition: 0.5s;
      display: block;
      font-weight: bold;
    }
  }
  .selectedText {
    transition: 0.5s;
    display: inline;
  }
  @media (min-width: 425px) {
    display: none;
  }
`;
