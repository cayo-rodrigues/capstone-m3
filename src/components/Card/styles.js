import styled from "styled-components";

export const Container = styled.div`
  .titleAndImg {
    align-items: flex-start;
    .title {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 16px;
      line-height: 14px;
      margin: 0;
      padding: 3px 0 0;
      text-align: start;
      font-weight: bold;
    }
  }
  .occupation_areas {
    list-style: disc;
    color: var(--color-aux);
    margin-top: -20px;
    text-transform: capitalize;

    li + li {
      margin-top: 5px;
    }
  }
  .location {
    color: black;
    font-size: 14px;
    margin: 15px auto;
    padding: 0;
    width: 80%;
    text-align: center;
    cursor: pointer;
    justify-content: flex-start;
    .locationDiv {
      text-align: center;
      padding: 5px 8px;
      background-color: lightblue;
      border-radius: 20px;
      margin: 3px 1px;
      display: inline-block;
      max-width: 110px;
      color: var(--color-primary);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .link {
    text-align: center;
    margin: 5px;
    line-height: 3px;
    font-size: 13px;
  }

  section {
    text-align: center;
    -webkit-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 250px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      > h2 {
        font-weight: 400;
      }
      > img {
        object-fit: cover;
      }
    }
  }
  section img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  }

  ul {
    text-align: left;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    list-style: none;
    color: var(--color-secondary);
    > li {
      text-align: left;
      width: 80%;
    }
    > p {
      width: 100%;
      text-align: start;
    }
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    border-radius: 100%;
    border: none;
  }
  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Imagem = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const ModalContainer = styled.div`
  border-radius: 8px;
  border: none;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h3 {
    width: 60%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    > h2 {
      font-weight: 400;
    }
    > img {
      object-fit: cover;
      width: 100px;
      height: 100px;
    }
  }
  section img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    color: var(--color-secondary);
    > h3 {
      text-align: left;
      margin-bottom: 10px;
      width: 100%;
    }
    > li {
      font-size: 20px;
      text-align: left;
      width: 100%;
      list-style: none;
    }
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    border-radius: 100%;
    border: none;
  }
  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .link {
    margin-top: 10px;
    text-align: left;
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 1%;
  right: 1%;
  border: none;
  background-color: none;
  font-size: 20px;
`;
