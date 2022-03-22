import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  section {
    -webkit-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    flex-direction: column;
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
      width: 80%;
      text-align: left;
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
