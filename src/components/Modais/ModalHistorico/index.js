import React, { useEffect, useState } from "react";
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
} from "./styles";
import { MdClose } from "react-icons/md";
import activityService from "../../../services/activityService";

function ModalHistorico({ isOpen, CloseOnClick }) {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  // Função para buscar as atividades do serviço
  const fetchActivities = async () => {
    setLoading(true); // Inicia o estado de carregamento
    setError(null); // Limpa o estado de erro antes de fazer a chamada
    try {
      const response = await activityService.getActivities();
      console.log("=====================");
      console.log(response);
      console.log(response.data);
      if (response && response.data) {
        setAtividades(response.data); // Armazena as atividades no estado
      } else {
        setError("Erro ao carregar atividades."); // Caso não tenha resposta adequada
      }
    } catch (error) {
      setError("Erro ao buscar atividades."); // Define o estado de erro
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  // useEffect para buscar as atividades quando o modal for aberto
  useEffect(() => {
    if (isOpen) {
      fetchActivities();
      console.log("*******************");
      console.log(atividades);
    }
  }, [isOpen]);

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>Histórico de Atividades</h1>
            {loading && <p>Carregando...</p>} {/* Mensagem de carregamento */}
            {error && <p style={{ color: "red" }}>{error}</p>}{" "}
            {/* Mensagem de erro */}
            <HistoryList>
              {!loading && !error && atividades && atividades.length > 0
                ? atividades.map((atividade, index) => (
                    <ActivityItem key={index}>
                      <ActivityName>{atividade[0]}</ActivityName>
                      <ActivityName>{atividade[2]}</ActivityName>
                      <ActivityTime>{atividade[1]} minutos</ActivityTime>
                      <ActivityDescription>{atividade[3]}</ActivityDescription>
                    </ActivityItem>
                  ))
                : !loading &&
                  !error && <p>Nenhuma atividade registrada ainda.</p>}
            </HistoryList>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalHistorico;
