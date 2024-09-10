import styled, { keyframes } from "styled-components";

// Animação para crescer a partir do meio (abrir)
const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// Animação para diminuir para o meio (fechar)
const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;

// Background que escurece a tela quando o modal é aberto
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);  // Cor preta semitransparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.3s, opacity 0.3s;
`;

// Container do modal
export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-style: solid;
  border-width: 1px;
  padding: 2em;
  border-radius: 10px;
  width: 50%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  /* Aplica a animação dependendo do estado do modal */
  animation: ${({ isOpen }) => (isOpen ? scaleIn : scaleOut)} 0.3s forwards;
  transform-origin: center; /* Define o ponto de origem como o centro */
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ec5353;
  }
`;

export const CaloTem = styled.div`
 display: flex;
 flex-direction: row;
 justify-items: end;
 align-items: center;
 gap: 0.6em;
`;

export const ActiveButton = styled.button`
    color: rgba(255, 255, 255, 1);
    border: black;
    font-weight: 600;
    font-size: 1.2em;
    cursor: pointer;
    background: linear-gradient(180deg, #8000ff, #6000ff);
    width: 8em;
    height: 1.7em;
    border-radius:0.4vw;
    display: flex;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;    
    transition: all 0.2s;
    font-family: Poppins;
    font-style: normal;
    margin-top: 1em;

    &:hover {
        filter: brightness(1.1); /* Aumenta o brilho em 10% */
    }

    &:active{
        transform: translateY(2px);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
`;

export const ActiveButton2 = styled.button`
    color: rgba(255, 255, 255, 1);
    border: black;
    font-weight: 600;
    font-size: 1.2em;
    cursor: pointer;
    background: linear-gradient(180deg, #8000ff, #6000ff);
    width: 12em;
    height: 1.7em;
    border-radius:0.4vw;
    display: flex;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;    
    transition: all 0.2s;
    font-family: Poppins;
    font-style: normal;
    margin-top: 1em;

    &:hover {
        filter: brightness(1.1); /* Aumenta o brilho em 10% */
    }

    &:active{
        transform: translateY(2px);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
`;

export const Input = styled.input`
  height: 6vh;
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
`;