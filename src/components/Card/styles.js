import styled from "styled-components";

export const Container = styled.div`
  section {
    -webkit-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 4px 11px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    border-radius: 8px;
    border: none;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      > h2 {
        font-weight: 400;
      }
      > img {
        object-fit: cover;
      }
    }
    > 
  }
  section img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    color: var( --color-secondary);
    > li {
      text-align: left;
      width: 80%;
    }
    > p {
      width: 80%;
      text-align: left;
    }
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    border-radius: 100%;
    border: none;
  }
  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
