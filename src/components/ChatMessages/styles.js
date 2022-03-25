import styled from "styled-components";

export const BoxChat = styled.div`
  border: 0px solid;
  display: flex;
  flex-direction: column;
  background-color: var(--whitesmoke);
  
  @media (max-width:1000px) {

 
  }
  > button {
    margin: 0 auto;
    border: none;
    background-color: var(--color-aux);
    color: var(--white);
  }
  .current-chat-user{
    position: absolute;
    top: 0;
    left: 100px;
    height:30px;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 14px;
  }
  .voltarChat {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    transition: 1s;
    border-radius: 0;
    :hover {
      background-color: white;
      color: black;
      transition: 1s;
    }
  }
  .voltarChat{
    right: 0;
    z-index: 10;
    
  }

  .boxInput {
    /* position: absolute;
    bottom: 0;
    left: 0; */
    padding: 10px;
    width: 100%;
    background-color: #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > input {
      font-size: 18px;
      padding: 5px;
      border-radius: 5px;
      width: 90%;
      padding: 15px;
      margin: 0 5px;
      border: 0px;
      border-radius: 33px;
    }
    > button {
      width: 50px;
      height: 50px;
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary);
      color: white;

      transition: 1s;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      :hover {
        transition: 1s;
        background-color: var(--color-aux);
      }
      svg {
        width: 50%;
        height: 50%;
      }
    }
  }
  .box-messages{
    height: 100%;
    border: 0;
    padding: 25px;
  }


`;

export const BoxMessages = styled.div`
  border-bottom: 3px solid var(--darkblue);
  
  word-break: break-all;
  font-size: 13px;
`;

export const BoxInput = styled.div`
  align-self: flex-end;
`;
