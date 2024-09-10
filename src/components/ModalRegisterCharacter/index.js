import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  DivForms,
  DivDescricao,
  Butao,
  DivFormsBaixo,
  Input1,
  ImagemWrapper,
  PersonagemDiv,
} from "./styles";
import { Input } from "../inputText/styles";
import personagens from "../../assets/images/personagens.png";
import userService from "../../services/userService";

function ModalRegisterCharacter() {
  const [weight, setPeso] = useState("");
  const [height, setAltura] = useState("");
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);
  const [error, setError] = useState("");

  const handleClick = (personagem) => {
    setSelectedPersonagem(personagem);
  };

  const handleRegister = async () => {
    // Validação dos campos
    if (!weight || !height || !selectedPersonagem) {
      setError(
        "Por favor, preencha todos os campos e selecione um personagem."
      );
      return;
    }

    // Valida o peso (deve ser um número decimal entre 0 e 300)
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum < 0 || weightNum > 300) {
      setError("O peso deve ser um número decimal entre 0 e 300 kg.");
      return;
    }

    // Valida a altura (deve ser um número decimal entre 0.5 e 3)
    const heightNum = parseFloat(height);
    if (isNaN(heightNum) || heightNum < 50 || heightNum > 300) {
      setError(
        "A altura deve ser um número decimal entre 50 centimetros e 250 centimetros."
      );
      return;
    }

    // Limpa o erro se estiver tudo certo
    setError("");

    // Armazena os dados (você pode salvar em localStorage ou em um backend aqui)
    const characterData = {
      weight: weightNum,
      height: heightNum,
      personagem: selectedPersonagem,
    };

    console.log(characterData); // Para verificar os dados no console
    const userId = localStorage.getItem("userId");
    await userService.updateUser(userId, characterData);
    // Redireciona para o dashboard
    window.open("/dashboard", "_self");
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Insira seus dados pessoais</Subtitle>
        </DivDescricao>
        <DivFormsBaixo>
          <Input1
            placeholder="Peso (em kg)"
            value={weight}
            onChange={(e) => setPeso(e.target.value)} // Armazena o weight
          />
          <Input1
            placeholder="Altura (em cm)"
            value={height}
            onChange={(e) => setAltura(e.target.value)} // Armazena a height
          />
        </DivFormsBaixo>
        <Subtitle>Seu personagem</Subtitle>

        <ImagemWrapper>
          <PersonagemDiv
            selected={selectedPersonagem === 1}
            onClick={() => handleClick(1)}
            style={{ left: 0 }}
          />
          <PersonagemDiv
            selected={selectedPersonagem === 2}
            onClick={() => handleClick(2)}
            style={{ right: 0 }}
          />
          <img src={personagens} alt="Personagens" />
        </ImagemWrapper>

        {/* Exibe mensagem de erro se houver */}
        {error && <p style={{ color: "red", fontSize: "0.7em" }}>{error}</p>}

        <Butao onClick={handleRegister}>Vamos lá</Butao>
      </DivForms>
    </Container>
  );
}

export default ModalRegisterCharacter;
