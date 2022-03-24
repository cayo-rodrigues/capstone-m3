import styled from "styled-components";

export const DashboardContainer = styled.main`
  margin: 40px auto;
  max-width: 1400px;
  padding: 30px;
  text-align: center;
  transition: 1s all;
  animation: fadeIn 1s;
  ul {
    margin: 80px 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
        max-height: 320px;
      max-width: 250px;
      padding: 0 0 40px;
      margin: 10px 30px;
      border: 2px solid #dadada;
      transition: 1s all;
      border-radius: 10% 10% 20px 20px ;
      color:#000;
      background-color: #f3f3f3;
      font-weight: bold;
      font-family: var(--font-text);
      a{
        color:#000;
      }
      :hover{
          transform: scale(1.1);
          transition: 1s all;

      }
      img {
        width: 250px;
        height: 250px;
        object-position: left;
        object-fit: cover;
        border: 1px solid #eee;
        background-color: #dadada;
        transition: 1s all;
        border-radius:10% 10% 0 0 ;
        :hover{
        }
      }
      h3 {
        margin: 5px 0 0;
        padding: 0 15px;
        font-size: 15px;
      }
    }
  }
`;
