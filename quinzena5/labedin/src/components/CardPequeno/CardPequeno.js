import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div>
      <div className="container-email">
        <img src={props.imgEmail} alt="Ícone de email" />
        <h3>{props.email}</h3>
      </div>
      <div className="container-endereco">
        <img src={props.imgEndereco} alt="Ícone de endereço" />
        <p>{props.endereco}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
