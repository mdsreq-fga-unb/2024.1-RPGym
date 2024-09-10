import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  ActiveButton,
  Input,
} from "./styles";

import { MdClose } from "react-icons/md";
import InputText from "../../inputText";

function ModalEntrarGrupo({ isOpen, CloseOnClick, SuccessOnClick }) {
  // Estados para armazenar os valores dos inputs
  const [nomeCodigo, setnpmeCodigo] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const areFieldsValid = () => {
    return (
      nomeCodigo.trim() !== ""
    );
  };

  // Função para lidar com o clique de "Registrar"
  const handleRegistrar = () => {
    if (areFieldsValid()) {
      const Grupo = {
        nome: nomeCodigo,
      };
      SuccessOnClick(Grupo); // Envia os dados para a função SuccessOnClick
    } else {
      alert("Preencha todos os campos antes de registrar!");
    }
  };

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>Entre em um grupo!</h1>
            <InputText
              placeholder="Código do grupo"
              type="text"
              value={nomeCodigo}
              onChange={(e) => setnpmeCodigo(e.target.value)}
            />
            <ActiveButton onClick={handleRegistrar}>Entrar</ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalEntrarGrupo;
