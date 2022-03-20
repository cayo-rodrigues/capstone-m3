import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  .cardbox {
    width: 80%;
    height: 80%;
    background-color: var(--color-bg);
    flex-direction: column;
    padding: 20px;
    margin: 60px;
  }
  .announcer{
    width: 200px;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
  }
  img {
    max-width: 640px;
    width: 60vw;
  }
`;
