import styled, { keyframes } from "styled-components";

export const HistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ActivityItem = styled.li`
  background-color: #222;
  padding: 2em;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 38em;
`;

export const ActivityName = styled.h2`
  color: #fff;
  margin: 0;
`;

export const ActivityTime = styled.p`
  color: #ddd;
  margin: 5px 0;
`;

export const ActivityDescription = styled.p`
  color: #aaa;
`;

// Background que escurece a tela quando o modal é aberto
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Cor preta semitransparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: visibility 0.3s, opacity 0.3s;
`;

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

// Container do modal
export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-style: solid;
  border-width: 0.05em;
  padding: 2em;
  border-radius: 0.5em;
  width: 50%;
  height: 60%;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.3);
  position: relative;
  /* Aplica a animação dependendo do estado do modal */
  animation: ${({ isOpen }) => (isOpen ? scaleIn : scaleOut)} 0.3s forwards;
  transform-origin: center; /* Define o ponto de origem como o centro */
  overflow-y: auto;
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  position: absolute;
  color: white;
  top: 1vh;
  right: 1vh;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ec5353;
  }
`;
