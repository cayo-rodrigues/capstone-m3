import styled from "styled-components";

export const ServiceContainer = styled.main`
  max-width: 1400px;
  margin: 60px auto;
  animation: fadeIn 1s;
  @media (max-width: 710px) {
    margin: 10px auto 0px;
  }
  .cities {
    list-style: none;
    margin: 10px 0 20px;
    h2 {
      margin: 0;
    }
    .locationInfo,
    .locationTitle {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      margin: 5px;
      background-color: var(--lightblue);
      color: var(--color-primary);
      padding: 10px 15px;
      cursor: pointer;
      border: 2px solid transparent;
      transition: 1s all;
      :hover {
        transition: 1s all;
        border: 2px solid var(--blue);
      }
    }
  }
  .profile-header {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 90px;
      color: var(--whitesmoke);
      font-weight: bold;
      font-family: var(--font-title);
      letter-spacing: -7px;
      @media (max-width: 710px) {
        font-size: 45px;
      }
    }
    width: 97%;
    height: 200px;
    border-radius: 50px 50px 0px 0px;
    margin: 40px auto 0px;
    background-color: var(--color-aux);
    position: relative;
    @media (max-width: 710px) {
      height: 150px;
      margin: 10px auto 0px;
    }
    figure {
      position: absolute;
      bottom: -60px;
      left: 15%;
      background-color: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        padding: 5px;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
      @media (max-width: 710px) {
        bottom: -50px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  .profile-content {
    background-color: var(--whitesmoke);
    padding: 100px 60px 40px 140px;
    margin: 0px 20px 40px;
    border-radius: 0 0 50px 50px;
    @media (max-width: 710px) {
      padding: 60px 10px 20px;
    }
    .profile-tittle {
      margin: 0px 0 50px;
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 30px;
        font-weight: 300;
        text-transform: capitalize;
      }
      @media (max-width: 710px) {
        margin: 0px 0 10px;
        h1 {
          font-size: 22px;
        }
        p {
          font-size: 17px;
        }
      }
    }
    h2 {
      font-size: 30px;
      margin: 30px 0;
      @media (max-width: 710px) {
        font-size: 20px;
      }
    }
    p {
      font-size: 22px;
      margin: 15px 0 0 0px;
      @media (max-width: 710px) {
        font-size: 14px;
      }
    }
    .rating {
      font-size: 30px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .icon {
      background-color: var(--green);
      text-align: center;
      box-shadow: 0px 4px 20px var(--green);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: var(--white);
      height: 50px;
      width: 200px;
      border-radius: 20px;
      margin: 0 10px;
      cursor: pointer;
      :hover {
        background-color: var(--darkgreen);
      }
      svg {
        color: var(--white);
        width: 30px;
        height: 30px;
        margin: 0 7px 0 0;
      }
      @media (max-width: 710px) {
        font-size: 12px;
        height: 35px;
        width: 110px;

        text-align: center;
        margin: 0px auto 15px;
        padding: 10px 0;

        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .icon-mail {
      background-color: var(--color-primary);
      box-shadow: 0px 4px 20px var(--color-primary);
      width: 230px;
      :hover {
        background-color: var(--darkblue);
      }
      @media (max-width: 710px) {
        font-size: 15px;
        height: 35px;
        width: 130px;
        text-align: center;
        margin: 10px 0 0 5px;
        padding: 10px 0;
        font-size: 12px;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
    .comments,
    textarea {
      padding: 30px 20px;
      background-color: var(--white);
      box-shadow: 4px 4px 10px var(--lightgrey);
      border-radius: 30px;
      width: 100%;
      margin: 10px auto 20px;
      display: flex;
      .profile-pic {
        cursor: pointer;
        margin: 0 0px 0 0;
        display: flex;
        justify-content: center;
        color: var(--white);
        font-size: 25px;
        font-weight: bold;
        p {
          border-radius: 50%;
          background-color: var(--color-primary);
          width: 50px;
          height: 50px;
          display: flex;
          margin: 0;
          justify-content: center;
          align-items: center;
          @media (max-width: 710px) {
            width: 30px;
            height: 30px;
          }
        }
      }
      .profile-comment {
        margin: 0 0 0 15px;
        @media (max-width: 710px) {
          margin: 0 0 0 10px;
        }
        h3 {
          font-size: 17px;
          padding: 0;
          margin: 0;
        }
        p {
          padding: 0;
          margin: 0;
          font-size: 15px;
        }
      }
      @media (max-width: 710px) {
        padding: 15px 20px;
        p {
          font-size: 11px;
        }
        h3 {
          font-size: 14px;
        }
      }
    }
    textarea {
      font-size: 17px;
      border-color: var(--lightgrey);
      font-family: var(--font-text);
      max-width: 100%;
      min-width: 100%;
      min-height: 150px;
      max-height: 250px;
      position: relative;
    }
    button {
      position: relative;
      ::after {
        content: "Para poder comentar é necessário estar logado";
        position: absolute;
        color: var(--black);
        bottom: -30px;
        font-size: 12px;
        left: 0px;
        width: 270px;
      }
    }
  }
`;
