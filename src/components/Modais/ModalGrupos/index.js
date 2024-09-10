import React, { useEffect, useState, useRef } from 'react';
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
    BtnButton3
} from "./styles";

import { MdClose } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ModalEditarGrupo from '../ModalEditarGrupo';

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
    { nome: "Esportes", numeroDePessoas: 14 },
];

const BancoFalsoPessoas = [
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
    { nome: "João da Silva", gruposComuns: ["Trabalho", "Academia"] },
    { nome: "Maria Jocinta", gruposComuns: ["Igreja", "Família"] },
    { nome: "Pedro Alkimin", gruposComuns: ["Futebol", "Faculdade"] },
    { nome: "Ana Barbosa", gruposComuns: ["Teatro", "Dança"] },
    { nome: "Carlos de Andrade", gruposComuns: ["Música", "Culinária"] },
    { nome: "Fernanda Leandrina", gruposComuns: ["Viagem", "Esportes"] },
];

function ModalGrupos({ isOpen, CloseOnClick }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [fontSize, setFontSize] = useState(1); // Estado para controlar o tamanho da fonte
    const boxListRef = useRef(null); // Ref para o BoxListGroups
    const [marginTop, setMarginTop] = useState(1);
    const [selectedGroup, setSelectedGroup] = useState(null); // Estado para armazenar o grupo selecionado

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
    };

    // Filtrar os integrantes do grupo selecionado
    const getIntegrantesDoGrupo = (groupName) => {
        return BancoFalsoPessoas.filter(pessoa =>
            pessoa.gruposComuns.includes(groupName)
        );
    };

    // Função para deletar o grupo selecionado
    const handleGroupDelete = () => {
        if (selectedGroup) {
            // Remove o grupo da lista
            const updatedGroups = BancoFalsoGrupos.filter(grupo => grupo.nome !== selectedGroup.nome);
            // Atualize o estado com a nova lista de grupos
            BancoFalsoGrupos = updatedGroups;
            // Limpa a seleção do grupo
            setSelectedGroup(null);
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
                        <DescriptionBox style={{ fontSize: `${fontSize}em`, marginTop: `${marginTop}em`, transition: 'font-size 0.2s ease, margin-top 0.2s ease' }}>
                            <h1 style={{ color: "white" }}>Seus grupos</h1>
                            <h2 style={{ opacity: "80%", marginTop: "-1em", fontWeight: "400", marginBottom: "0" }}>Veja todos os seus grupos!</h2>
                        </DescriptionBox>
                    </ModalHeader>
                    <ModalScrollableContent>
                        <BoxListPersons ref={boxListRef}>
                            {selectedGroup ? (
                                // Exibir detalhes do grupo selecionado, incluindo os integrantes
                                <div style={{marginRight:"-1em", overflow:"hidden", marginBottom:"1em"}}>
                                    <h2 style={{fontSize:"1em"}}>Detalhes do Grupo: {selectedGroup.nome}</h2>
                                    <p>Número de pessoas: {selectedGroup.numeroDePessoas}</p>
                                    <h3 style={{marginBottom:"-0.01em"}}>Integrantes:</h3>
                                    <div style={{display:"flex", flexDirection:"column", overflowY:"auto", flexShrink:"0", height:"90%", flexGrow: "1"}}>
                                        <ul>
                                            {getIntegrantesDoGrupo(selectedGroup.nome).map((pessoa, index) => (
                                                <li key={index} style={{marginBottom:"1em"}}>{pessoa.nome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <BtnButton onClick={() => setSelectedGroup(null)}>
                                        <IoArrowBack />
                                    </BtnButton>
                                    <BtnButton2 onClick={handleGroupDelete}>
                                        <MdDeleteOutline />
                                    </BtnButton2 >
                                    <BtnButton3 onClick={openModal}>
                                        <MdEdit />
                                    </BtnButton3 >
                                </div>
                            ) : (
                                // Listar todos os grupos quando nenhum estiver selecionado
                                BancoFalsoGrupos.map((grupo, index) => (
                                    <GroupBox key={index} onClick={() => handleGroupClick(grupo)} style={{ cursor: 'pointer' }}>
                                        <GroupName>{grupo.nome}</GroupName>
                                        <GroupItem>
                                            <p style={{ fontSize: "0.9em", fontWeight: "200", marginRight: "1em", fontStyle: "normal" }}>Quantidade:</p> {grupo.numeroDePessoas} Membros
                                        </GroupItem>
                                    </GroupBox>
                                ))
                            )}
                        </BoxListPersons>
                    </ModalScrollableContent>
                </ModalContainer>
            </ModalBackground>
            {isModalOpen && <ModalEditarGrupo isOpen={!isClosing} CloseOnClick={CloseHandleModalToggle} SuccessOnClick={SuccessHandleModalToggle}/>}
        </div>
    );
}

export default ModalGrupos;