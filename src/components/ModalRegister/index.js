import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  SubSubSubSubtitle,
  DivForms,
  DivDescricao,
  Cadastrese,
  DivFormsBaixo,
  InputText1,
} from "./styles";
import userService from "../../services/userService.js";
import InputText from "../inputText";

function ModalRegister() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState(null); // Estado para mensagens de erro
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mensagens de sucesso

  const handleCadastro = async () => {
    // Validações dos campos
    if (nome.trim().length < 1 || nome.trim().length > 50) {
      setError("O nome deve ter entre 1 e 50 caracteres.");
      return;
    }

    // Validação de e-mail com expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("O e-mail fornecido não é válido.");
      return;
    }

    if (senha.length < 8 || senha.length > 20) {
      setError("A senha deve ter entre 8 e 20 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    if (idade < 1 || idade > 99) {
      setError("A idade deve estar entre 1 e 99 anos.");
      return;
    }

    const userData = {
      name: nome,
      email: email,
      password: senha,
      age: idade,
      height: 0, // Defina um valor padrão ou ajuste conforme necessário
      weight: 0, // Defina um valor padrão ou ajuste conforme necessário
    };

    try {
      const response = await userService.createUser(userData);
      const userId = await userService.getUserByEmail(email);
      // Armazena o _id e outros dados no localStorage
      localStorage.setItem("userId", userId.id);
      localStorage.setItem("userData", JSON.stringify(userData));
      setSuccessMessage("Cadastro realizado com sucesso!");
      setError(null); // Limpa a mensagem de erro
      // Redireciona para a página de personagem
      window.location.href = "/character";
    } catch (error) {
      setError("Erro ao criar usuário. Tente novamente.");
      setSuccessMessage(null); // Limpa a mensagem de sucesso
    }
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Faça o cadastro e começe seu legado!</Subtitle>
        </DivDescricao>
        <InputText
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <InputText
          placeholder="Confirme a sua senha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <DivFormsBaixo>
          <InputText
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputText1
            placeholder="Idade"
            value={idade}
            type="number"
            onChange={(e) => setIdade(e.target.value)}
          />
        </DivFormsBaixo>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <Cadastrese onClick={handleCadastro}>Cadastre-se</Cadastrese>
        <SubSubSubSubtitle>
          Já tem uma conta? <a href="/">Faça Log in</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalRegister;
