import styled, { keyframes } from "styled-components";
import MalePerson from "../../../assets/images/Personagens/MalePerson.png";
import FemalePerson from "../../../assets/images/Personagens/FemalePerson.png"

// Defina a animação de subir e descer
const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px); /* Sobe 10px */
  }
  100% {
    transform: translateY(0); /* Volta à posição inicial */
  }
`;

export const Grid = styled.div`
  grid-area: Personagem;
  margin: auto;
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  background-color: #8000ff;
  width: 35em;
  height: 18em;
  border-radius: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const BoxInfos = styled.div`
  display: flex;
  margin-left: 0.2em;
  width: 30em;
  height: 15em;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

export const BoxInfoPerson = styled.div`
  display: flex;
  flex-direction: row;
  width: 33em;
  height: 18em;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ApelidoBox = styled.div`
  display: flex;
  border-color: black;
  position: absolute;
  background-color: #8000ff;
  border-radius: 20px;
  border-color: black;
  border-width: 1.5px;
  border-style: solid;
  justify-content: center;
  align-items: center;
  min-width: 4.5vw;
  text-overflow: ellipsis " [..]";
  padding-left: 1em;
  padding-right: 1em;
  height: 2em;
  top: -1em;
  left: 5.4em;
`;

export const IMC = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: -1.8em;
`;

export const Timc = styled.h1`
  color: white;
  margin-bottom: -0.6em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Vimc = styled.h3`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Metricas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TPeso = styled.h3`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: -1em;
`;

export const Peso = styled.h4`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const TAltura = styled.h3`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: -1em;
`;

export const Altura = styled.h4`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const PesoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const AlturaBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-left: 1em;
`;

//1 male - 2 female
export const BoxPerson = styled.div`
  display: flex;
  position: relative;
  background-image: url(${(props) => props.personagemType === 1 ? MalePerson : FemalePerson}); // Usa a imagem baseada no tipo
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: 1.2em;
  width: 28em;
  height: 19em;
  bottom: 1em;

  animation: ${moveUpDown} 4s infinite ease-in-out;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5em;
`;

export const ActiveButton = styled.button`
  color: #8000ff;
  border: black;
  font-weight: 600;
  font-size: 1.2em;
  cursor: pointer;
  background: linear-gradient(180deg, #ffa800, #ffe6b6);
  width: 8em;
  height: 1.7em;
  border-radius: 0.4vw;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  font-family: Poppins;
  font-style: normal;

  &:hover {
    filter: brightness(1.1); /* Aumenta o brilho em 10% */
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Historico = styled.button`
  color: #8000ff;
`;

export const MoreBox1 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 3em;
  z-index: 100;
  right: 5.4em;
  top: 0.6em;
  cursor: default;
`;

export const CircleBox1 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 7em;
  z-index: 100;
  right: 3em;
  bottom: 0.7em;
  cursor: default;
`;

export const HistoryButton = styled.button``;

export const MoreBox2 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 1.5em;
  z-index: 100;
  right: 3em;
  top: 4.5em;
  cursor: default;
`;

export const CircleBox2 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 3.5em;
  z-index: 100;
  right: 1.5em;
  top: 2.8em;
  cursor: default;
`;

export const MoreBox3 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 1.5em;
  z-index: 100;
  right: 24.5em;
  top: 7.5em;
  cursor: default;
`;

export const CircleBox3 = styled.div`
  display: flex;
  position: relative;
  color: #6b00d6;
  font-weight: 700;
  font-size: 3.5em;
  z-index: 100;
  right: 6.1em;
  top: 2.1em;
  cursor: default;
`;
