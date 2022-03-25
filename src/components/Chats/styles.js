import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  .col-left {
    flex-basis: 30%;

    min-width: 350px;
    height: 100vh;
    overflow-y: auto;
    z-index: 20;
    background-color: #fff;
    overflow-y: auto;
    @media (max-width:1000px) {
        flex-basis: 100%;
    }
    h1 {
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: -3px;
      text-align: center;
      margin: 0 0 0px;
      padding: 10px;
      background-color: #000;
      color: white;
      padding: 5px;
    }
    h2{
        padding: 5px;
        font-weight: 400;
        font-size:15px ;
        text-align: center;
        background-color: #e1e1e1;
    }
    .usuario{
        font-weight: bold;
        border-bottom: 1px solid var(--white);
        color: var(--color-primary);
    }
    .recent-open {
      /* height: 360px;
      overflow-y: auto; */
    }
    .all-chats {
      /* height: 360px;
      overflow-y: auto; */
    }
    .list-of-workers{
        width: 100%;
        background-color: #fff;
        color: black;
        font-size: 13px;
        padding: 8px 0 8px 35px ;
        font-weight: bold;
        border-bottom: 2px solid #e1e1e1;
        transition: 1s;
        cursor: pointer;
        :hover{
            background-color: var(--color-primary);
            color: white;
            transition: 1s;
        }

    }
    ::-webkit-scrollbar{
        width: 5px;
        background-color: #000;
    }
    ::-webkit-scrollbar-corner{
        background-color: #000;

    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--color-primary);

    }
    ::-webkit-scrollbar-track{
        background-color: #e1e1e1;
    }
  }

  .col-right {
      position: relative;
      display: flex;
      overflow-y: auto;
      justify-content: flex-end;
      flex-direction: column;
    flex-basis: 70%;
    background-color: #f3f3f3;
    min-height: 100vh;
    height: 100vh;
    .current-Chat{
        position: absolute;
        top: 0;
        left: 0;
        height:50px;
        padding: 15px;
        background-color: #000;
        color: white;
    }
    @media (max-width:1000px) {
        /* display: none;
        width: 100%;
        min-height: 100vh; */
    }
  }
`;
