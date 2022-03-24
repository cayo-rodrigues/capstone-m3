import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
`;

export const ServicePageContainer = styled.main`
  margin: 60px auto;
  h2 {
    font-size: 40px;
    margin: 30px 0;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 29px;
    }
  }
`;
export const SearchCity = styled.div`
  width: 100%;
  background-color: #eceff1;
  text-align: center;
  .linha{
    width: 100px;
    margin: 10px auto 30px;
    height: 3px;
    background-color: var(--color-primary);
  }
  h1{
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 23px;
    }
  }
  .container{
    width: 100%;
    max-width: 900px;
    padding: 90px 0;
    margin: 0px auto;
    min-height: 380px;
    @media (max-width: 768px) {
      padding: 40px 0;
    }
  }
  .inputDiv{
    max-width: 90%;
    margin:20px auto ;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    button,input{
      border: 0;
      padding: 15px 20px;
    }
    input{
      width: 90%;
      height: 100%;
      font-size: 20px;
      border: 2px solid transparent;
      border-right: 0;
      :hover,:focus{
        border: 2px solid #ddd;
        border-right: 0;

      }

    }
    button{
      background-color: var(--color-primary);
      color: white;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 1s all;
      justify-content: center;
      :hover{
        transition: 1s all;
        background-color: var(--color-aux);
      }
      svg{
        width: 100%;
        height: 100%;
      }
    }

  }
`