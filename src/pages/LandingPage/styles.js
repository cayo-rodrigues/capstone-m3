import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-align: center;
  h1 {
    color: #fff;
    font-weight: normal;
    font-size: 25px;
    text-align: start;
    margin-left: 25px;
    margin-bottom: 10px;
    padding: 20px;
    span {
      font-size: 35px;
    }
  }
  p {
    color: #fff;
    padding-bottom: 30px;
  }
  img {
    max-width: 640px;
    width: 60vw;
  }
  .item1 {
    order: 3;
  }
  .item2 {
    width: 40vw;
  }
  .item3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 40vw;
    justify-content: space-between;
  }
  button {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    /* margin-top: 8px; */
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 20px;
      text-align: start;
      margin: 0;
      span {
        font-size: 25px;
      }
    }
    p {
      padding-bottom: 10px;
      width: 200px;
    }
    img {
      display: none;
    }
    .item2 {
      width: 60vw;
    }
  }
`;
