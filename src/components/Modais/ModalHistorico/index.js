import React from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  HistoryList,
  ActivityItem,
  ActivityName,
  ActivityTime,
  ActivityDescription,
} from "./styles"; // Adicione esses novos estilos conforme necessário
import { MdClose } from "react-icons/md";

function ModalHistorico({ isOpen, CloseOnClick, atividades }) {
  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>Histórico de Atividades</h1>
            <HistoryList>
              {atividades && atividades.length > 0 ? (
                atividades.map((atividade, index) => (
                  <ActivityItem key={index}>
                    <ActivityName>{atividade.nome}</ActivityName>
                    <ActivityTime>{atividade.tempo} minutos</ActivityTime>
                    <ActivityDescription>
                      {atividade.descricao}
                    </ActivityDescription>
                  </ActivityItem>
                ))
              ) : (
                <p>Nenhuma atividade registrada ainda.</p>
              )}
            </HistoryList>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalHistorico;
