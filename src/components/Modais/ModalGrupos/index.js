import React, { useEffect, useState, useRef } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  DescriptionBox,
  BoxListPersons,
  GroupBox,
  GroupName,
  GroupItem,
  ModalHeader,
  ModalScrollableContent,
  BtnButton,
  BtnButton2,
  BtnButton3,
  BtnButton4,
} from "./styles";

import { MdClose } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TbDoorExit } from "react-icons/tb";
import ModalEditarGrupo from "../ModalEditarGrupo";
import groupService from "../../../services/groupService"; // Ajuste o caminho para o seu serviço real

function ModalGrupos({ isOpen, CloseOnClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
  const boxListRef = useRef(null); // Ref para o BoxListGroups
  const [marginTop, setMarginTop] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState(null); // Estado para armazenar o grupo selecionado
  const [integrantes, setIntegrantes] = useState([]); // Estado para armazenar os integrantes do grupo
  const [gruposUsuario, setGruposUsuario] = useState([]); // Estado para armazenar os grupos

  // Carregar grupos do backend
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await groupService.getGroups(); // Chama o serviço
        setGruposUsuario(response.data); // Atualiza o estado com os grupos recebidos
      } catch (error) {
        console.error("Erro ao buscar grupos", error);
      }
    };

    fetchGroups(); // Chama a função para buscar os grupos
  }, []);

  // Obter o número de membros de um grupo
  const getNumeroDeMembros = (grupo) => {
    return grupo.users ? grupo.users.length : 0;
  };

  // Carregar integrantes de um grupo selecionado
  const fetchIntegrantes = async (groupId) => {
    try {
      const response = await groupService.getGroupMembers(groupId); // Chama o serviço real para buscar os membros
      setIntegrantes(response.data); // Atualiza o estado com os membros do grupo
    } catch (error) {
      console.error("Erro ao buscar integrantes", error);
    }
  };

  const CloseHandleModalToggle = () => {
    setIsClosing(true); // Inicia o fechamento
    setTimeout(() => {
      setIsModalOpen(false); // Fecha o modal após a animação
      setIsClosing(false); // Reseta o estado de fechamento
    }, 300); // Ajuste o tempo para o mesmo da duração da animação de saída
  };

  const SuccessHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função que atualiza o tamanho da fonte com base no scroll
  const handleScroll = () => {
    const scrollTop = boxListRef.current.scrollTop;
    if (scrollTop > 0) {
      setFontSize(0.7); // Diminui a fonte quando faz o scroll para baixo
      setMarginTop(1.5);
    } else {
      setFontSize(1); // Retorna ao tamanho normal quando volta ao topo
      setMarginTop(1);
    }
  };

  useEffect(() => {
    const boxListGroups = boxListRef.current;
    if (boxListGroups) {
      boxListGroups.addEventListener("scroll", handleScroll);
      return () => {
        boxListGroups.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Função para tratar o clique em um grupo
  const handleGroupClick = (group) => {
    setSelectedGroup(group); // Define o grupo clicado
    fetchIntegrantes(group.id); // Carrega os integrantes do grupo selecionado
  };

  // Função para deletar o grupo selecionado
  const handleGroupDelete = async () => {
    if (selectedGroup) {
      try {
        await groupService.deleteGroup(selectedGroup.id); // Deleta o grupo no backend
        const updatedGroups = gruposUsuario.filter(
          (grupo) => grupo.id !== selectedGroup.id
        );
        setGruposUsuario(updatedGroups); // Atualiza o estado com a nova lista de grupos
        setSelectedGroup(null); // Limpa a seleção do grupo
      } catch (error) {
        console.error("Erro ao deletar grupo", error);
      }
    }
  };

  // Função para expulsar um integrante do grupo
  const handleExpulsarIntegrante = async (nome) => {
    try {
      await groupService.removeMember(selectedGroup.id, nome); // Remove o membro no backend
      const updatedIntegrantes = integrantes.filter(
        (pessoa) => pessoa.nome !== nome
      );
      setIntegrantes(updatedIntegrantes); // Atualiza a lista de integrantes localmente
    } catch (error) {
      console.error("Erro ao expulsar integrante", error);
    }
  };

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <ModalHeader>
            <CloseButton onClick={CloseOnClick}>
              <MdClose />
            </CloseButton>
            <DescriptionBox
              style={{
                fontSize: `${fontSize}em`,
                marginTop: `${marginTop}em`,
                transition: "font-size 0.2s ease, margin-top 0.2s ease",
              }}
            >
              <h1 style={{ color: "white" }}>Seus grupos</h1>
              <h2
                style={{
                  opacity: "80%",
                  marginTop: "-1em",
                  fontWeight: "400",
                  marginBottom: "0",
                }}
              >
                Veja todos os seus grupos!
              </h2>
            </DescriptionBox>
          </ModalHeader>
          <ModalScrollableContent>
            <BoxListPersons ref={boxListRef}>
              {selectedGroup ? (
                // Exibir detalhes do grupo selecionado, incluindo os integrantes
                <div
                  style={{
                    marginRight: "-1em",
                    overflow: "hidden",
                    marginBottom: "1em",
                  }}
                >
                  <h2 style={{ fontSize: "1em" }}>
                    Detalhes do Grupo: {selectedGroup.name}
                  </h2>
                  <p>Descrição do grupo:</p>
                  <br />
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.9em",
                      marginLeft: "1em",
                      marginTop: "-1.7em",
                    }}
                  >
                    {selectedGroup.description}
                  </p>
                  <p>Código:</p>
                  <br />
                  <p
                    style={{
                      fontStyle: "italic",
                      fontSize: "0.9em",
                      marginLeft: "1em",
                      marginTop: "-1.7em",
                    }}
                  >
                    {selectedGroup.joinCode}
                  </p>
                  <p>Número de pessoas: {getNumeroDeMembros(selectedGroup)}</p>
                  <h3 style={{ marginBottom: "-0.01em" }}>Integrantes:</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "auto",
                      flexShrink: "0",
                      height: "90%",
                      flexGrow: "1",
                    }}
                  >
                    <ul>
                      {integrantes.map((pessoa, index) => (
                        <div
                          key={index}
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <li style={{ marginBottom: "1em" }}>{pessoa.name}</li>
                          <BtnButton4
                            onClick={() =>
                              handleExpulsarIntegrante(pessoa.users)
                            }
                          >
                            <TbDoorExit size={"0.7em"} />
                          </BtnButton4>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <BtnButton onClick={() => setSelectedGroup(null)}>
                    <IoArrowBack />
                  </BtnButton>
                  <BtnButton2 onClick={handleGroupDelete}>
                    <MdDeleteOutline />
                  </BtnButton2>
                  <BtnButton3 onClick={openModal}>
                    <MdEdit />
                  </BtnButton3>
                  <ModalEditarGrupo
                    isOpen={isModalOpen}
                    onClose={CloseHandleModalToggle}
                    onSuccess={SuccessHandleModalToggle}
                  />
                </div>
              ) : (
                // Verificar se gruposUsuario é um array antes de usar .map()
                Array.isArray(gruposUsuario) && gruposUsuario.length > 0 ? (
                  gruposUsuario.map((grupo, index) => (
                    <GroupBox
                      key={index}
                      onClick={() => handleGroupClick(grupo)}
                      style={{ cursor: "pointer" }}
                    >
                      <GroupName>{grupo.name}</GroupName>
                      <GroupItem>
                        <p
                          style={{
                            fontSize: "0.9em",
                            fontWeight: "200",
                            marginRight: "1em",
                            fontStyle: "normal",
                          }}
                        >
                          Quantidade:
                        </p>{" "}
                        {getNumeroDeMembros(grupo)} Membros
                      </GroupItem>
                    </GroupBox>
                  ))
                ) : (
                  <p style={{fontStyle:"italic"}}>Você não está em nenhum grupo!</p> // Mensagem quando não há grupos
                )
              )}
            </BoxListPersons>
          </ModalScrollableContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalGrupos;
