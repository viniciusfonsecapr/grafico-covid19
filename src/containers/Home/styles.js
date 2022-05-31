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

export const MessageForPeoples = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
  img {
    margin-left: 400px;
    margin-top: 100px;
    width: 300px;
  }
  p {
    font-size: 30px;
    position: relative;
    margin-left: 800px;
    margin-top: -150px;
  }
`;

export const ContainerLocate = styled.div`
  display: flex;
  margin-left: 15px;
  margin-top: 50px;
`;
