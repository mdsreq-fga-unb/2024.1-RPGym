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
    padding: 2em;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", inherit;
  font-size: 2.8vw;
  margin-bottom: 1vh;
  font-weight: bold;
  font-weight: 600;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

export const Login = styled.button`
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
  align-self: center;
  cursor: pointer;
  margin-top: 8vw;
  @media screen and (max-width: 1000px) {
    font-size: 4vw;
  }
`;

export const DivForms = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    font-size: 5vw;
  }
  ::placeholder {
    font-size: 2vw;
  }
`;

export const DivDescricao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivSubdescricao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  font-family: "Poppins", inherit;
  margin-bottom: -0.7vh;
  font-weight: bold;
  font-weight: 600;
  font-size: 1.2vw;
  @media screen and (max-width: 1000px) {
    font-size: 4vw;
  }
`;

export const SubSubtitle = styled.p`
  font-family: "Poppins", inherit;
  margin-bottom: 1vh;
  font-size: 0.8vw;
  color: #666666;
  font-weight: 300;
  margin-bottom: 2vw;
  @media screen and (max-width: 1000px) {
    font-size: 2vw;
  }
`;

export const SubSubSubtitle = styled.p`
  font-family: "Poppins";
  font-size: 0.8vw;
  color: #666666;
  font-weight: 300;
  margin-top: -0.2vw;
  align-self: flex-end;
  @media screen and (max-width: 1000px) {
    font-size: 2vw;
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
