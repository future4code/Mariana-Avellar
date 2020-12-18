import React from "react";
import "./CardPessoal.css";

function CardPessoal(props) {
  return (
    <div>
      <div className="container-pessoal">
        <img src={props.imgPessoal} alt="Retrato de Mariana Avellar" />
        <h3>{props.nome}</h3>
      </div>
      <div className="container-whatsapp">
        <img src={props.imgWhatsapp} alt="Ícone do whats app" />
        <p>{props.whatsapp}</p>
      </div>
    </div>
  );
}

export default CardPessoal;
