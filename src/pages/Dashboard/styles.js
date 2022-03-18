import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.main`
  background-color: #8396cd;
  height: 87vh;
  h1 {
    font-size: 24px;
    margin-left: 78px;
    text-shadow: #000 2px 3px 2px;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media (max-width: 881px) {
    display: grid;
    h1 {
      margin-left: 0px;
      position: unset;
      padding-left: 20px;
    }
    justify-content: center;
    height: 82vh;
  }
`;

export const ContainerNamePicture = styled.div`
  img {
    position: relative;
    top: 69px;
  }
  display: flex;

  justify-content: space-between;
  width: 96%;
  padding-left: 28px;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  @media (max-width: 881px) {
    padding-left: 0px;
    width: 90%;
    img {
      position: inherit;
    }
  }
`;

export const ContainerAdicionarServicos = styled.div`
  h3 {
    color: #04164d;
    font-weight: 400;
  }
  margin-right: 16px;
  margin-left: 16px;
  box-shadow: 9px 6px #16191940;
  border-radius: 8px;
  background-color: white;
  @media (max-width: 881px) {
    position: unset;
    .inputService {
      height: 23px;
    }

    width: 92%;
    margin: 0px 0px 160px 23px;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    -webkit-align-items: center;
    -ms-flex-align: center;
    flex-direction: column;
  }
`;

export const ContainerRegisterProfession = styled.div`
  background-color: #8396cd;
  border-radius: 7px;
  padding-left: 24px;
  padding-right: 24px;

  ul {
    font-size: 14.8732px;
    font-family: var(--font-text);
    color: white;
  }
  p {
    font-family: var(--font-title);
    color: white;
    font-weight: 400;
    font-size: 20px;
  }
  input {
    border-radius: 5px;
    border: none;
    padding-left: 3px;
  }

  height: 100%;
  padding-top: 10px;
  padding-bottom: 39px;
  width: 70%;
  margin-top: 14px;
  margin-bottom: 10px;
  margin-left: 25px;
  @media (max-width: 881px) {
    margin-left: 0px;
    width: 90%;
    input {
      width: 60%;
    }
  }
`;
export const ContainerContact = styled.div`
  img {
    margin-right: 5px;
    max-width: 40px;
  }
  input {
    margin-left: 25px;

    width: 40%;
    font-family: var(--font-title);
    font-weight: 400;
    background-color: #43568d;
    border-radius: 5px;
    border: none;
    height: 35px;
    text-align: -webkit-center;
  }
  div {
    margin-top: 25px;
    width: 100%;
    display: flex;
  }
  input::placeholder {
    color: white;
  }
  margin-left: 26px;
  @media (max-width: 881px) {
    width: 90%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-left: 6px;
      width: 100%;
    }
    div {
      margin-top: 15px;
    }
  }
`;
export const ContainerWhatsapp = styled.div``;
export const ContainerEmail = styled.div`
  margin-top: 17px;
`;

export const ContainerCheckin = styled.div`
  margin-top: 12px;
  margin-bottom: 13px;

  input {
    margin-left: 0px;
    margin-right: 5px;
    max-width: 40px;
  }
  p {
    margin-left: 25px;
    padding-right: 17px;
    width: 100%;
    color: #04164d;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--font-text);
  }
  @media (max-width: 881px) {
    align-items: center;
    input {
      margin-left: 11px;
      width: 5%;
    }

    p {
      margin-left: 6px;
      text-align: -webkit-center;
    }
    .checkin {
      width: 62px;
    }
  }
`;

export const ContainerImage = styled.div`
  img {
    width: 400px;
  }
  padding-right: 25px;
  @media (max-width: 881px) {
    img {
      display: none;
    }
  }
`;

export const ContainerDad = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
