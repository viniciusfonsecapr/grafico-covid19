import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e8e8e8;

  @media (max-width: 450px) {
    width: 450px;
    height: 3000px;
    background-color: #e8e8e8;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  @media (max-width: 450px) {
    flex-direction: column;
    margin: 0 0 0 30px;
    height: 1400px;

    p {
      margin-top: 2px;
      font-size: 14px;
    }
    .card1 {
      box-shadow: 0 0 1em black;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }

    .card2 {
      box-shadow: 0 0 1em red;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .card3 {
      box-shadow: 0 0 1em green;
      margin-bottom: 10px;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
  // POS MEDIA QUERIES
  .card1 {
    box-shadow: 0 0 2em black;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .card2 {
    box-shadow: 0 0 2em red;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  .card3 {
    box-shadow: 0 0 2em green;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const ContainerGraph1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
  background-color: white;
  height: 490px;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    flex-wrap: wrap;
    width: 250px;
    height: 1000px;
  }
  div {
    width: 500px;
  }

`;
export const Footer = styled.footer`
  margin-top: 50px;
  height: 20px;
  background-color: white;
  border-top: 0.1px solid gray;

  p {
    font-family: "Oswald", sans-serif;
    color: black;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }

  a {
    background-color: white;
    font-size: 10px;
    height:10px;
    display: none;
  }
`;
