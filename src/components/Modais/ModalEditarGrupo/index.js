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
import groupService from "../../../services/groupService";

function ModalEditarGrupo({ isOpen, CloseOnClick, SuccessOnClick }) {
  // Estados para armazenar os valores dos inputs
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [nomeDescricao, setNomeDescricao] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const areFieldsValid = () => {
    return nomeGrupo.trim() !== "", nomeDescricao.trim() !== "";
  };

  const confirmAction = () => {
    const confirmed = window.confirm(
      "Tem certeza que deseja continuar a ação?"
    );
    return confirmed;
  };

  const handleDelete = () => {
    if (confirmAction()) {
      groupService.removeUserFromGroup();
      // Execute a ação se o usuário confirmar
      console.log("Ação confirmada.");
    } else {
      // Cancelar a ação
      console.log("Ação cancelada.");
    }
  };

  // Função para lidar com o clique de "Registrar"
  const handleRegistrar = () => {
    if (areFieldsValid()) {
      if (window.confirm("Tem certeza que deseja continuar a ação?")) {
        const Grupo = {
          nome: nomeGrupo,
          nomeDescricao,
        };
        SuccessOnClick(Grupo); // Envia os dados para a função SuccessOnClick
      } else {
        alert("Ação cancelada!");
      }
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
