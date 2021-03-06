import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvo from "../../img/saved-icon.svg";
import iconeNaoSalvo from "../../img/not-saved-icon.svg";

import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

class Post extends React.Component {
  state = {
    curtido: false,
    salvo: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  };

  onClickCurtida = () => {

    let numeroCurtidasAtual

    if(this.state.curtido) {
      numeroCurtidasAtual = this.state.numeroCurtidas - 1
    } else {
      numeroCurtidasAtual = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: numeroCurtidasAtual
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    });
  };

  aoEnviarComentario = () => {

    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      listaComentarios: true
    });
  };

  onClickSalvar = () => {
    this.setState({
      salvo: true
    });
  };

  render() {

    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let iconeSalvar;

    if (this.state.salvo) {
      iconeSalvar = iconeSalvo;
    } else {
      iconeSalvar = iconeNaoSalvo;
    }

    return (
      
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src= {this.props.fotoUsuario}
              alt={"Imagem do usuario"}
            />
            <p>{this.props.nomeUsuario}</p>
          </div>

          <div className={"post-photo"}>
            <img
              className={"post-photo"}
              src={this.props.fotoPost}
              alt={"Imagem do post"}
            />
          </div>

          <div className={"post-footer"}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeComContador
              icone={iconeSalvar}
              onClickIcone={this.onClickSalvar}
            />
          </div>
          <div>{componenteComentario}</div>
        </div>
    );
  }
}

export default Post;

  