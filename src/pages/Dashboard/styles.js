import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.main`
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
  height: 100%;
  flex-direction: column;
  h1 {
    font-size: 24px;
    margin-left: 78px;
    text-shadow: #000 2px 3px 2px;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
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
  width: 85%;
  position: inherit;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const ContainerAdicionarServicos = styled.div`
  h3 {
    color: #04164d;
    font-weight: 400;
  }
  margin: 50px;
  box-shadow: 9px 6px #16191940;
  border-radius: 8px;
  background-color: white;
  position: unset;
  padding: 20px;
  @media (max-width: 768px) {
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
    width: 80%;
  }
  input {
    border-radius: 5px;
    border: none;
    padding-left: 3px;
  }

  height: 100%;
  padding-top: 10px;
  padding-bottom: 39px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
    input {
      width: 70%;
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
  margin-top: 5px;
  @media (max-width: 768px) {
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
