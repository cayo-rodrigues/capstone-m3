import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100%;
  color: #fff;
  h1 {
    position: relative;
    left: 10px;
    top: 10px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  img {
    display: none;
  }
  @media (min-width: 768px) {
    img {
      display: flex;
      width: 640px;
      height: auto;
    }
    height: 100vh;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  position: relative;
  top: 2rem;
  width: 90vw;
  height: auto;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  @media (min-width: 768px) {
    padding: 30px;
    position: absolute;
    width: auto;
    height: auto;
    right: 100px;
    top: 90px;
    display: grid;
    grid: 200px / 1fr 1fr;
  }
`;

export const Card = styled.div`
  width: 260px;
  height: 180px;
  background-color: var(--color-secondary);
  margin: 0 auto;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 2.5em;
  padding: 5px;
  @media (min-width: 768px) {
    margin: 30px;
  }
  h1 {
    max-width: 220px;
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
    width: 50px;
    display: block;
    position: relative;
    left: 190px;
    bottom: 80px;
  }
`;
