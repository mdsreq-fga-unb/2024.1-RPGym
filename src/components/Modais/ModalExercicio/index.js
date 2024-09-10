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
import TextAreaExercicio from "../../TextAreaExercicio";
import InputText from "../../inputText";
import activityService from "../../../services/activityService";

function ModalExercicio({ isOpen, CloseOnClick, SuccessOnClick }) {
  // Estados para armazenar os valores dos inputs
  const [nomeAtividade, setNomeAtividade] = useState("");
  const [tempo, setTempo] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para verificar se todos os campos estão preenchidos
  const areFieldsValid = () => {
    return (
      nomeAtividade.trim() !== "" &&
      tempo.trim() !== "" &&
      descricao.trim() !== ""
    );
  };

  // Função para lidar com o clique de "Registrar"
  const handleRegistrar = () => {
    console.log("Registrar", nomeAtividade, tempo, descricao);
    if (areFieldsValid()) {
      const atividade = {
        activityName: nomeAtividade,
        duration: tempo,
        description: descricao,
      };
      activityService.registerActivity(atividade);
      // SuccessOnClick(atividade); // Envia os dados para a função SuccessOnClick
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
            <h1 style={{ color: "white" }}>Registrar atividade</h1>
            <InputText
              placeholder="Nome da atividade"
              type="text"
              value={nomeAtividade}
              onChange={(e) => setNomeAtividade(e.target.value)}
            />
            <Input
              placeholder="Tempo em minutos"
              type="number"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
            />
            <TextAreaExercicio
              placeholder="Descrição da atividade"
              cols={21}
              rows={10}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <ActiveButton onClick={handleRegistrar}>Registrar</ActiveButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalExercicio;
