import React, { useState, useRef, useEffect } from "react";
import {
  Caixa,
  BoxMore,
  BoxAdd,
  ButtonAdd,
  BoxListGroups,
  Grid,
  BoxButton,
  DescriptionBox,
  Title,
  SubTitle,
  ButtonMore,
  GroupBox,
  GroupName,
  GroupItem,
  CircleBox1,
  MoreBox1,
  CircleBox2,
} from "./styles";
import { RiAddLine } from "react-icons/ri";
import ModalGrupos from "../../Modais/ModalGrupos";
import ModalOpcGrupo from "../../Modais/ModalOpcGrupo";
import groupService from "../../../services/groupService";

const Grupos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosing2, setIsClosing2] = useState(false);
  const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
  const boxListRef = useRef(null); // Ref para o BoxListGroups
  const [gruposUsuario, setGruposUsuario] = useState([]); // Array vazio como valor inicial

  useEffect(() => {
    const fetchGroups = async () => {
      const response = await groupService.getGroups(); // Chama o serviço
      setGruposUsuario(response); // Atualiza o estado com os grupos recebidos
    };

    fetchGroups(); // Chama a função para buscar os grupos
  }, []);

  // Função para calcular o número de membros no grupo
  const getNumeroDeMembros = (grupo) => {
    return grupo.users.length;
  };

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  // Função que atualiza o tamanho da fonte com base no scroll
  const handleScroll = () => {
    const scrollTop = boxListRef.current.scrollTop;
    if (scrollTop > 0) {
      setFontSize(0.7); // Diminui a fonte quando faz o scroll para baixo
    } else {
      setFontSize(1); // Retorna ao tamanho normal quando volta ao topo
    }
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

  useEffect(() => {
    const boxListGroups = boxListRef.current;
    if (boxListGroups) {
      boxListGroups.addEventListener("scroll", handleScroll);
      return () => {
        boxListGroups.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Grid>
      <Caixa>
        <BoxMore>
          <DescriptionBox
            style={{
              fontSize: `${fontSize}em`,
              transition: "font-size 0.2s ease",
            }}
          >
            <Title>Seus Grupos</Title>
            <SubTitle>Veja os seus grupos!</SubTitle>
          </DescriptionBox>
          <BoxAdd>
            <ButtonAdd onClick={openModal2}>
              <RiAddLine size={"100%"} />
            </ButtonAdd>
          </BoxAdd>
        </BoxMore>
        <BoxListGroups ref={boxListRef}>
          {gruposUsuario && Array.isArray(gruposUsuario.data) ? (
            gruposUsuario.data.map((grupo) => (
              <GroupBox key={grupo._id}>
                <GroupName>{grupo.name}</GroupName>
                <GroupItem>{getNumeroDeMembros(grupo)} Membros</GroupItem>
              </GroupBox>
            ))
          ) : (
            <p style={{ fontStyle: "italic" }}>
              Ops, você não possui nenhum grupo!
            </p> // Caso os dados não sejam um array ou estejam vazios
          )}
        </BoxListGroups>

        <BoxButton>
          <ButtonMore onClick={openModal}>Mais detalhes</ButtonMore>
        </BoxButton>
        <CircleBox1>.</CircleBox1>
        <MoreBox1>+</MoreBox1>
        <CircleBox2>.</CircleBox2>

        {isModalOpen && (
          <ModalGrupos
            isOpen={!isClosing}
            CloseOnClick={CloseHandleModalToggle}
            SuccessOnClick={SuccessHandleModalToggle}
          />
        )}
        {isModalOpen2 && (
          <ModalOpcGrupo
            isOpen={!isClosing2}
            CloseOnClick={CloseHandleModalToggle2}
            SuccessOnClick={SuccessHandleModalToggle2}
          />
        )}
      </Caixa>
    </Grid>
  );
};

export default Grupos;
