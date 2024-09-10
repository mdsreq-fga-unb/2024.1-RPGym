import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5vw;
  min-width: 36vw;
  min-height: 68vh;
  background-color: #ffffff;
  box-shadow: 0px 0px 2vw 0.2vw rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 1000px) {
    min-height: 75vw;
    min-width: 80vw;
    margin: auto;
    padding: 3em;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", inherit;
  font-size: 2.8vw;
  margin-bottom: 0.1vh;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

export const Cadastrese = styled.button`
  border-radius: 0.5vw;
  background: linear-gradient(
    90deg,
    rgba(0, 101, 253, 1) 0%,
    rgba(188, 0, 254, 1) 100%
  );
  font-family: "Poppins";
  font-weight: bold;
  font-size: 1vw;
  font-weight: 500;
  color: white;
  border: none;
  width: 27vw;
  height: 6vh;
  cursor: pointer;
  margin-top: 4.5vw;
  align-self: center;
  cursor: pointer;
  margin-top: 8vw;
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
  }
`;

export const DivForms = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    font-size: 5vw;
    ::placeholder {
      font-size: 2vw;
    }
  }
`;

export const DivDescricao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivFormsBaixo = styled.div`
  display: flex;
  @media screen and (max-width: 1000px) {
    font-size: 5vw;

    ::placeholder {
      font-size: 2vw;
    }
  }
`;

export const Subtitle = styled.p`
  font-family: "Poppins", inherit;
  font-weight: 600;
  font-size: 1.2vw;
  @media screen and (max-width: 1000px) {
    font-size: 4vw;
  }
`;

export const SubSubSubSubtitle = styled.p`
  font-family: "Poppins";
  font-size: 0.8vw;
  color: #666666;
  font-weight: 300;
  margin-top: 1vw;
  align-self: center;
  margin-bottom: 2vw;
  @media screen and (max-width: 1000px) {
    font-size: 2vw;
  }
`;

export const InputText1 = styled.input`
  height: 6vh;
  width: 1vw;
  margin-left: 1vw;
  border-radius: 0.5vw;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 0.9vw;
  color: black;
  margin-bottom: 0.8vw;
  padding-left: 0.8vw;
  border-width: 0.1vw;
  border-style: solid;
  border-color: #cccccc;
  flex-grow: 1;
  @media screen and (max-width: 1000px) {
    font-size: 2vw;
  }
`;
