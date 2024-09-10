import React, { useState, useRef, useEffect } from "react";
import { Caixa, BoxMore, BoxAdd, ButtonAdd, BoxListGroups, Grid, BoxButton, DescriptionBox, Title, SubTitle, ButtonMore, GroupBox, GroupName, GroupItem, CircleBox1, MoreBox1, CircleBox2 } from "./styles";
import { RiAddLine } from "react-icons/ri";
import ModalGrupos from "../../Modais/ModalGrupos";
import ModalCriarGrupos from "../../Modais/ModalCriarGrupo";

const BancoFalsoGrupos = [
    { nome: "Trabalho", numeroDePessoas: 8 },
    { nome: "Academia", numeroDePessoas: 5 },
    { nome: "Igreja", numeroDePessoas: 12 },
    { nome: "Família", numeroDePessoas: 6 },
    { nome: "Futebol", numeroDePessoas: 10 },
    { nome: "Faculdade", numeroDePessoas: 9 },
    { nome: "Teatro", numeroDePessoas: 7 },
    { nome: "Dança", numeroDePessoas: 4 },
    { nome: "Música", numeroDePessoas: 11 },
    { nome: "Culinária", numeroDePessoas: 3 },
    { nome: "Viagem", numeroDePessoas: 6 },
    { nome: "Esportes", numeroDePessoas: 14 }
  ];

const Grupos = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosing2, setIsClosing2] = useState(false);
  const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
  const boxListRef = useRef(null); // Ref para o BoxListGroups

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

  // Função que atualiza o tamanho da fonte com base no scroll
  const handleScroll = () => {
    const scrollTop = boxListRef.current.scrollTop;
    if (scrollTop > 0) {
      setFontSize(0.7); // Diminui a fonte quando faz o scroll para baixo
    } else {
      setFontSize(1); // Retorna ao tamanho normal quando volta ao topo
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

  return (
    <Grid>
      <Caixa>
        <BoxMore>
            <DescriptionBox style={{ fontSize: `${fontSize}em`, transition: 'font-size 0.2s ease' }}>
              <Title>Seus Grupos</Title>
              <SubTitle>Veja os seus grupos!</SubTitle>
            </DescriptionBox>
            <BoxAdd>
                <ButtonAdd onClick={openModal2}>
                    <RiAddLine size={"100%"}/>  
                </ButtonAdd>
            </BoxAdd>
        </BoxMore>
        <BoxListGroups ref={boxListRef}>
            {BancoFalsoGrupos.map((grupo, index) => (
                <GroupBox key={index}>
                <GroupName>{grupo.nome}</GroupName>
                <GroupItem>{grupo.numeroDePessoas} Membros</GroupItem>
                </GroupBox>
            ))}
        </BoxListGroups>
        <BoxButton>
          <ButtonMore onClick={openModal}>
            Mais detalhes
          </ButtonMore>
        </BoxButton>
        <CircleBox1>
          .
        </CircleBox1>
        <MoreBox1>
          +
        </MoreBox1>
        <CircleBox2>
          .
        </CircleBox2>

        {isModalOpen && <ModalGrupos isOpen={!isClosing} CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
        {isModalOpen2 && <ModalCriarGrupos isOpen={!isClosing2} CloseOnClick={CloseHandleModalToggle2} SuccessOnClick={SuccessHandleModalToggle2}/>}
      </Caixa>
    </Grid>
  )
};

export default Grupos;