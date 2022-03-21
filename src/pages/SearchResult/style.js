import styled from "styled-components";
import bg from "../../assets/background/bg.svg";

// lembre-se de usar html semântico
export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100vh;
  display: flex;
  
`;

export const ServicePageContainer = styled.main`
  margin: 60px auto;
  h1{
    font-size: 40px;
    margin:  30px 0;
    text-align: center;
    @media (max-width:768px) {
      font-size: 29px;
    }
  }
  p{

  }

`