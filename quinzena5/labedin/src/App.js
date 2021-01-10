import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import CardPessoal from "./components/CardPessoal/CardPessoal";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import logoWP from "./img/logo-wordpress.png";
import logoLabenu from "./img/logo-labenu.png";
import iconeEmail from "./img/icone-email.png";
import iconeEndereco from "./img/icone-endereco.png";
import iconeWhatsapp from "./img/icone-whatsapp.png";
import minhaImagem from "./img/minha-imagem.png";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Mariana"
          descricao="Oi, eu sou a Mariana. Sou estudante aqui na Labenu no curso de Front End com React."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPessoal
          imgPessoal={minhaImagem}
          imgWhatsapp={iconeWhatsapp}
          nome="Mariana Avellar"
          whatsapp="31-3333-9999"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imgEmail={iconeEmail}
          imgEndereco={iconeEndereco}
          email="mariana@gmail.com"
          endereco="Rua Labenu, 123"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoLabenu}
          nome="Labenu"
          descricao="Cursando Front End com React"
        />

        <CardGrande
          imagem={logoWP}
          nome="Wordpress"
          descricao="3 sites construídos com wordpress"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
