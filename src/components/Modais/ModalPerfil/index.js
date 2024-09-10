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
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para o aviso de sucesso

  const navigate = useNavigate();

  // Função para verificar se pelo menos um campo foi preenchido
  const isAnyFieldFilled = () => {
    return (
      senha.trim() !== "" ||
      nome.trim() !== "" ||
      idade.trim() !== "" ||
      altura.trim() !== "" ||
      peso.trim() !== ""
    );
  };

  const handleRegistrar = async () => {
    const userId = localStorage.getItem("userId");

    // Só envia os campos que foram preenchidos
    const updatedData = {};
    if (senha.trim() !== "") updatedData.password = senha;
    if (nome.trim() !== "") updatedData.name = nome;
    if (idade.trim() !== "") updatedData.age = idade;
    if (altura.trim() !== "") updatedData.height = altura;
    if (peso.trim() !== "") updatedData.weight = peso;

    if (isAnyFieldFilled()) {
      try {
        await userService.updateUser(userId, updatedData);
        alert("Dados atualizados com sucesso!"); // Mostra mensagem de sucesso
        setTimeout(() => {
          window.location.reload();
        }, 100);
        SuccessOnClick(updatedData);
      } catch (error) {
        alert("Erro ao atualizar os dados. Tente novamente.");
      }
    } else {
      alert("Preencha pelo menos um campo antes de registrar!");
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
                placeholder="Nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputText
                placeholder="Senha"
                type="text"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
            {successMessage && ( // Renderiza a mensagem de sucesso se ela existir
              <p style={{ color: "green", marginTop: "10px" }}>
                {successMessage}
              </p>
            )}
            <LogoutButton onClick={handleLogout}>Sair da conta</LogoutButton>
          </ModalContent>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
}

export default ModalPerfil;
