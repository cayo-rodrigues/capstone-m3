import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  height: 100%;

  h1 {
    color: var(--white);
    font-size: 25px;
    font-weight: normal;
    padding: 10px;
  }
  p {
    color: var(--white);
    letter-spacing: 0.1px;
    font-weight: lighter;
    padding: 5px;
    text-shadow: 0.2px 0.5px 2px var(--black);
  }
  @media (min-width: 850px) {
    h1 {
      font-size: 32px;
      text-shadow: 0.2px 0.5px 2px var(--black);
    }
    p {
      font-size: 20px;
      padding: 20px;
    }
  }
`;
