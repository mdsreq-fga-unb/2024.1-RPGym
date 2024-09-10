import React, { useState } from "react";
import campeonato from "../assets/images/icones/campeonatos.png";
import home from "../assets/images/icones/home.png";
import ranking from "../assets/images/icones/ranking.png";
import sobre from "../assets/images/icones/sobre.png";
import configuracoes from "../assets/images/icones/configuracoes.png";
import ModalPerfil from "../components/Modais/ModalPerfil";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    <div className="Sidebar">
      <div className="Botão-Loja">
        <button class="Botão-Loja-Expandido">Loja</button>
      </div>
      <div className="Navegar">Navegar</div>
      <div className="Home">Home</div>
      <div className="IconHome">
        <a href="/dashboard">
          <img src={home} alt="home" />
        </a>
      </div>

      <div className="Ranking">Ranking</div>
      <div className="IconRanking">
        <img src={ranking} alt="ranking" />
      </div>
      <div className="Campeonatos">Campeonatos</div>
      <div className="IconCampeonatos">
        <img src={campeonato} alt="campeonato" />
      </div>
      <div className="AjudaPadding"></div>
      <div className="Ajuda">Ajuda</div>
      <div className="Sobre-nos">Sobre nós</div>
      <div className="IconSobre-nos">
        <img src={sobre} alt="sobre" />
      </div>
      <div className="UsuarioPadding"></div>
      <div className="IconUsuario"></div>
      <div className="Usuario">
        <div className="UsuarioTexto">Usuário</div>
        <div className="Configuracoes">
          <img
            style={{ cursor: "pointer" }}
            onClick={openModal}
            src={configuracoes}
            alt="Configurações"
          />
        </div>
      </div>
      {isModalOpen && (
        <ModalPerfil
          isOpen={!isClosing}
          CloseOnClick={CloseHandleModalToggle}
          SuccessOnClick={SuccessHandleModalToggle}
        />
      )}
    </div>
  );
};

export default Sidebar;
