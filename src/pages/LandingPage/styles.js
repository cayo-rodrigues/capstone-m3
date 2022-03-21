import styled from "styled-components";

import bgHome from "../../assets/svg/home.svg";
import bg from '../../assets/background/bg.svg'

// lembre-se de usar html semântico
export const LandPageContainer = styled.div`

  /* background-size: cover;
  background-repeat: no-repeat;
  background:url(${bg}) ; */

  margin: 0;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 80vh;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media (min-width: 1600px) {
    max-height: 780px;
    min-height: 780px;
  }
  h1 {
    color: var(--color-primary);
    font-weight: 200;
    font-size: 42px;
    letter-spacing: 6px;
    text-transform: uppercase;
    text-align: start;

    @media (max-width: 868px) {
      font-size: 24px;
      letter-spacing: initial;
    }
    span {
      letter-spacing: -8px;
      font-size: 76px;
      font-weight: bold;
      display: block;
      color: #000;
      @media (max-width: 868px) {
        font-size: 46px;
        letter-spacing: initial;
      }
    }
  }
  p {
    color: #222;
    font-size: 20px;
    font-weight: 500;
    text-align: start;
    padding: 30px 0 0 0;
  }
  img {
    width: 640px;
  }
  .item1 {
    order: 3;
  }
  .col-left {
    flex-basis: 60%;
    height: 100%;
    padding: 0 0 0 40px;
    animation: fadeInRight 1s;

    input {
      border-radius: 26px 0 0 26px;
      height: 100%;
    }
    @media (max-width: 868px) {
      flex-basis: 100%;
      animation: fadeIn 1s ;

    }
  }
  .col-right {
    flex-basis: 40%;
    background-image: url(${bgHome});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90%;
    height: 100%;
    animation: fadeInLeft 1s;

    min-height: 90vh;
    @media (max-width: 868px) {
      display: none;
    }
  }
  .item3 {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    /* flex-direction: column; */
    max-width: 560px;
    margin: 30px 0 0 0;
  }
  button {
    margin: 0;
    border-radius: 0 26px 26px 0;
    box-shadow: 5px 4px 4px rgb(0 0 0 / 50%);
  }
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 26px;
      text-align: center;
      margin: 0;
      span {
        font-size: 40px;
      }
    }
    p {
      padding-bottom: 10px;
      text-align: center;
      font-size: 14px;
    }
    .item3 {
      max-width: 460px;
      margin: 10px auto;
      width: 100%;
      input,
      button {
        font-size: 11px;
      }
    }
    .col-left {
      padding: 0;
      width: 95%;
    }
    img {
      display: none;
    }
    .item2 {
      width: 60vw;
    }
  }
`;

export const HowItWorks = styled.main`
  background-color: var(--color-primary);
  margin: 80px 0 40px;
  padding: 30px;
  color:var(--white);
  @media (max-width:450px){
    margin: 10px 0 10px;
    padding:23px 20px ;
  }
  .container {
    margin: 80px auto;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;

    .col-left {
      flex-basis: 50%;
      position: relative;

      img{
        bottom: 0;
        left: 0;
        width: 80%;
        position: absolute;
      }
      @media (max-width:850px){
        display: none;
      }
    }
    .col-right {
      flex-basis: 50%;
      h3 {
        text-align: start;
        font-size: 50px;
        margin: 0 0 24px 0 ;
        @media (max-width:850px){
          font-size: 36px;
        }
        @media (max-width:450px){
          font-size: 22px;
        }
      }
      h4{
        font-size: 30px;
        padding: 10px 0;
        @media (max-width:450px){
          font-size: 18px;
        }
      }
      p {
        line-height: 1.8rem;
        @media (max-width:450px){
          line-height: 1rem;
          font-size: 14px;
          
        }
      }
      @media (max-width:850px){
        flex-basis:100%;

      }
    }
  }
`;
export const VideoSection = styled.section`
  max-width: 1400px;
  margin: 150px auto;
  text-align: center;
  iframe{
    margin: 0 auto;
    max-width: 1060px;
    width: 90%;
    min-height: 500px;
    @media (max-width:850px) {
      min-height: 300px;
    }
  }

`
export const CategorySection = styled.section`
  max-width: 1400px;
  margin: 40px auto 80px;
  .linha{
    height: 3px;
    width: 100px;
    background-color: var(--color-primary);
    margin: 20px auto;
  }
  h3{
    text-align: center;
    font-size: 40px;
    @media (max-width:768px) {
      font-size: 20px;
    }
  }
  ul{
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
    list-style: none;
    margin: 20px auto;
    li{
      background-color:#eee ;
      border-radius: 20px;
      text-align: center;
      margin: 10px;
      width: 140px;
      padding: 10px 10px 25px;
      box-sizing: initial;
      transition:1s all;
      cursor: pointer;
      @media (max-width:768px) {
        width: 115px;
      }
      :hover{
        transition:1s all;
        transform: scale(1.1);
      }
      img{
        width: 120px;
        height: 120px;
        object-fit: contain;
      }
      p{
        color: #000;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
  

`