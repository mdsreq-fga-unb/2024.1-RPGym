import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  ActiveButton,
  ActiveButton2
} from "./styles";

import { MdClose } from "react-icons/md";
import ModalCriarGrupos from "../ModalCriarGrupo";
import ModalEntrarGrupo from "../ModalEntrarGrupo";

function ModalOpcGrupo({ isOpen, CloseOnClick }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosing2, setIsClosing2] = useState(false);

  const CloseHandleModalToggle = () => {
    setIsClosing(true); // Inicia o fechamento
    setTimeout(() => {
      setIsModalOpen(false); // Fecha o modal após a animação
      setIsClosing(false); // Reseta o estado de fechamento
    }, 300); // Ajuste o tempo para o mesmo da duração da animação de saída
  };

  const CloseHandleModalToggle2 = () => {
    setIsClosing2(true); // Inicia o fechamento
    setTimeout(() => {
      setIsModalOpen2(false); // Fecha o modal após a animação
      setIsClosing2(false); // Reseta o estado de fechamento
    }, 300); // Ajuste o tempo para o mesmo da duração da animação de saída
  };

  const SuccessHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const SuccessHandleModalToggle2 = () => {
    setIsClosing2(true);
    setTimeout(() => {
      setIsModalOpen2(false);
      setIsClosing2(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  
  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>O que deseja fazer?</h1>
            <ActiveButton2 onClick={openModal2}>Entrar em um grupo</ActiveButton2>
            <ActiveButton onClick={openModal}>Criar grupo</ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>

      {isModalOpen2 && <ModalEntrarGrupo isOpen={!isClosing2} CloseOnClick={CloseHandleModalToggle2} SuccessOnClick={SuccessHandleModalToggle2}/>}
      {isModalOpen && <ModalCriarGrupos isOpen={!isClosing} CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
    </div>
  );
}

export default ModalOpcGrupo;
