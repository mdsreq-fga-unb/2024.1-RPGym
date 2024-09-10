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
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  border-style: solid;
  border-width: 1px;
  padding-left: 2em;
  padding-top: 2em;
  padding-right: 2em;
  border-radius: 10px;
  width: 50%;
  height: 80%;
  max-width: 25%;
  max-height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: ${({ isOpen }) => (isOpen ? scaleIn : scaleOut)} 0.3s forwards;
  transform-origin: center;
  overflow: hidden; /* Garante que o conteúdo extra não saia do modal */
`;

export const ModalHeader = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 1em;
  margin-top: -3em;
  flex-shrink: 0; /* Impede que o cabeçalho encolha */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
`;

export const ModalScrollableContent = styled.div`
  flex-grow: 1; /* Faz com que o conteúdo ocupe o espaço restante */
  overflow-y: auto; /* Habilita a rolagem para o conteúdo */
  margin-left: 2em;
  margin-right: 2em;

  ::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem no Webkit */
  }

  scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
`;

// Conteúdo do modal
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxListPersons = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1; /* Garante que preencha o espaço restante */
  height: 100%;
  
  ::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem no Webkit */
  }

  scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
`;

export const FriendBox = styled.div`
  margin-top: 1em;
`;

export const FriendName = styled.h3`
  font-size: 1em;
  font-weight: 600;
  margin-top: -1em;
`;

export const GroupList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
  flex-direction: row;
  margin-top: -1.5em;
  margin-bottom: -0.1em;
`;

export const GroupItem = styled.li`
    font-size: 0.7em;
    margin-left: 0.8em;
    font-weight: 400;
    font-style: italic;
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  flex-shrink: 0;
  color: white;
  top: 2em;
  right: -0.3em;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ec5353;
  }
`;