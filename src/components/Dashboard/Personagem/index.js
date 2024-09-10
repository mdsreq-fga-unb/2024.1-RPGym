import React, { useState, useEffect } from "react";
import userService from "../../../services/userService";
import {
  ApelidoBox,
  Box,
  BoxInfos,
  ButtonBox,
  IMC,
  Timc,
  Vimc,
  Metricas,
  TPeso,
  TAltura,
  PesoBox,
  AlturaBox,
  Peso,
  Altura,
  BoxInfoPerson,
  BoxPerson,
  ActiveButton,
  MoreBox1,
  CircleBox1,
  MoreBox2,
  CircleBox2,
  MoreBox3,
  CircleBox3,
  Grid,
} from "./styles";
import { RiAddLine } from "react-icons/ri";
import ModalExercicio from "../../Modais/ModalExercicio";
import ModalHistorico from "../../Modais/ModalHistorico";
import { MdHistory } from "react-icons/md";

const Personagem = ({ userId = localStorage.getItem("userId") }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imcValue, setImcValue] = useState();
  const [userName, setUser] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [isHistoricoOpen, setIsHistoricoOpen] = useState(false);
  const [personagemType, setPersonagemType] = useState(null); // 1 para masculino, 2 para feminino

  useEffect(() => {
    console.log(userId);
    const fetchUser = async () => {
      const { name } = await userService.getUser(userId);
      console.log(name);
      setUser(name);
      // console.log(user);
    };

    const fetchIMC = async () => {
      const imc = await userService.getIMC(userId);
      setImcValue(imc);
    };

    const fetchMetrics = async () => {
      const { peso, altura } = await userService.getUserMetrics(userId);
      // console.log(peso, altura);
      setPeso(peso);
      setAltura(altura);
    };

    const fetchPersonagemType = async () => {
      const { personagem } = await userService.getUser(userId);
      setPersonagemType(personagem.personagem);
    };

    // Chama as funções quando o componente for montado
    fetchIMC();
    fetchMetrics();
    fetchUser();
    fetchPersonagemType();
  }, [userId]);

  const CloseHandleModalToggle = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
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

  return (
    <Grid>
      <Box>
        <ApelidoBox>
          {userName !== null ? userName : "Carregando..."}
        </ApelidoBox>
        <BoxInfoPerson>
          <BoxInfos>
            <IMC>
              <Timc>IMC:</Timc>
              <Vimc>{imcValue !== null ? imcValue : "Carregando..."}</Vimc>
            </IMC>
            <Metricas>
              <PesoBox>
                <TPeso>Peso:</TPeso>
                <Peso>{peso !== null ? peso : "Carregando..."}</Peso>
              </PesoBox>
              <AlturaBox>
                <TAltura>Altura :</TAltura>
                <Altura>{altura !== null ? altura : "Carregando..."}</Altura>
              </AlturaBox>
            </Metricas>
            <ButtonBox>
              <ActiveButton onClick={openModal}>
                <RiAddLine style={{ marginRight: "0.3em" }} />
                Registrar
              </ActiveButton>
              <MdHistory
                style={{
                  marginTop: "0.5em",
                  cursor: "pointer",
                  alignSelf: "center",
                  height: "2em",
                  width: "5em",
                  color: "#FFA800",
                }}
                onClick={() => setIsHistoricoOpen(true)}
              />
            </ButtonBox>
          </BoxInfos>
          <BoxPerson personagemType={personagemType}></BoxPerson>
        </BoxInfoPerson>
        <MoreBox1>+</MoreBox1>
        <CircleBox1>.</CircleBox1>
        <MoreBox2>+</MoreBox2>
        <CircleBox2>.</CircleBox2>
        <MoreBox3>+</MoreBox3>
        <CircleBox3>.</CircleBox3>
        <ModalHistorico
          isOpen={isHistoricoOpen}
          CloseOnClick={() => setIsHistoricoOpen(false)}
        />
        {isModalOpen && (
          <ModalExercicio
            isOpen={!isClosing}
            CloseOnClick={CloseHandleModalToggle}
            SuccessOnClick={SuccessHandleModalToggle}
          />
        )}
      </Box>
    </Grid>
  );
};

export default Personagem;
