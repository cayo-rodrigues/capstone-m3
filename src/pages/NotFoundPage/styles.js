import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

export const Container = styled.div`
  padding: 42px 25px;
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
  background-size: cover;
  flex-direction: column;
  h2 {
    font-weight: 400;
    font-size: 30px;
    min-width: 400px;
    margin: 0 auto;
    color: var(--white);
    text-shadow: 0px 3px 3px var(--color-aux);
  }

  @media screen and (min-width: 768px) {
    font-size: 44px;
    padding: 60px 50px;
    flex-direction: row;
    h2 {
      font-size: 44px;
    }
  }
`;

export const ImgContainer = styled.figure`
  padding-top: 100px;
  margin: 0 auto;

  img {
    width: 40vw;
  }
`;
