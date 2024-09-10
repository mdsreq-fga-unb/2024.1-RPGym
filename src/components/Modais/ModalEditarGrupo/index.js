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

function ModalEditarGrupo({ isOpen, CloseOnClick, SuccessOnClick }) {
  // Estados para armazenar os valores dos inputs
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [nomeDescricao, setNomeDescricao] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const areFieldsValid = () => {
    return (
      nomeGrupo.trim() !== "",
      nomeDescricao.trim() !== ""
    );
  };

  // Função para lidar com o clique de "Registrar"
  const handleRegistrar = () => {
    if (areFieldsValid()) {
      const Grupo = {
        nome: nomeGrupo,
        nomeDescricao,
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
            <h1 style={{ color: "white" }}>Edite o seu grupo</h1>
            <InputText
              placeholder="Nome do grupo"
              type="text"
              value={nomeGrupo}
              onChange={(e) => setNomeGrupo(e.target.value)}
            />
            <InputText
              placeholder="Descrição do grupo"
              type="text"
              value={nomeDescricao}
              onChange={(e) => setNomeDescricao(e.target.value)}
            />
            <ActiveButton onClick={handleRegistrar}>Editar</ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalEditarGrupo;
