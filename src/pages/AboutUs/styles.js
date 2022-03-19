import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    padding-top: 20px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  img {
    display: none;
  }
  @media (min-width: 768px) {
    .time {
      display: block;
      width: 640px;
    }
    height: 100%;
    flex-direction: row;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 10px;
    margin-top: 50px;
    width: auto;
    height: auto;
    display: flex;
  }
`;

export const Card = styled.div`
  width: 260px;
  max-height: 300px;
  background-color: var(--color-secondary);
  margin: 0 auto;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 2.5em;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 30px;
    height: 200px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 20px;
    top: 0;
    left: 0;
    padding-left: 10px;
  }
  h2,
  h3 {
    padding-left: 10px;
    font-size: 14px;
  }

  img {
    width: 60px;
    display: block;
    padding-right: 10px;
  }
`;
