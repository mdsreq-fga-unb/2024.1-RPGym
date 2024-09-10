import React, { useState } from "react";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  ModalContent,
  ActiveButton,
  Input,
  InputText,
  Dados,
  LogoutButton,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import userService from "../../../services/userService";
function ModalPerfil({ isOpen, CloseOnClick, SuccessOnClick }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const navigate = useNavigate();

  const areFieldsValid = () => {
    return (
      email.trim() !== "" &&
      senha.trim() !== "" &&
      nome.trim() !== "" &&
      idade.trim() !== "" &&
      altura.trim() !== "" &&
      peso.trim() !== ""
    );
  };

  const handleRegistrar = () => {
    const userId = localStorage.getItem("userId");
    if (areFieldsValid()) {
      const registro = {
        email: email,
        password: senha,
        name: nome,
        age: idade,
        height: altura,
        weight: peso,
      };
      userService.updateUser(userId, registro);
      SuccessOnClick(registro);
      window.location.reload();
    } else {
      alert("Preencha todos os campos antes de registrar!");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("id");
    sessionStorage.removeItem("id");
    navigate("/");
  };

  return (
    <div>
      <ModalBackground isOpen={isOpen}>
        <ModalContainer isOpen={isOpen}>
          <CloseButton onClick={CloseOnClick}>
            <MdClose />
          </CloseButton>
          <ModalContent>
            <h1 style={{ color: "white" }}>Alterar dados</h1>
            <Dados>
              <InputText
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputText
                placeholder="Senha"
                type="text"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <InputText
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <Input
                placeholder="Idade"
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </Dados>
            <h1 style={{ color: "white" }}>Atualizar Peso e Altura</h1>
            <Dados>
              <Input
                placeholder="Altura"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
              <Input
                placeholder="Peso"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </Dados>
            <ActiveButton onClick={handleRegistrar}>Atualizar</ActiveButton>
            <LogoutButton onClick={handleLogout}>Sair da conta</LogoutButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalPerfil;
