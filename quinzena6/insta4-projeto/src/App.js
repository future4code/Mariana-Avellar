import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

class App extends React.Component {
  state = {
    
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Tomaz",
        fotoUsuario: "https://picsum.photos/50/40",
        fotoPost: "https://picsum.photos/200/100"
      },
      {
        nomeUsuario: "Juliana",
        fotoUsuario: "https://picsum.photos/30/80",
        fotoPost: "https://picsum.photos/200/175"
      }
    ],

    postado: false,
    inputNome: "",
    inputFoto: "",
    inputFotoPost: ""
  };

  adicionarPost = () => {
    this.setState({
      postado:true,
      inputNome: "",
      inputFoto: "",
      inputFotoPost: ""
    });

    const novoPost = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFoto,
      fotoPost: this.state.inputFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novosPosts
    });
  };

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value});
  };

  onChangeInputFoto = (event) => {
    this.setState({inputFoto: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value});
  };

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
    )})

    return (

      <div className={"app-container"}>
        <div className={"app-posts"}>
          {listaPosts}
        </div>

        <div className="app-form">
          <p>Digite e envie as informações para postar:</p>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />

          <input
            value={this.state.inputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto do usuário"}
          />

          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          
          <button onClick={this.adicionarPost}> ENVIAR </button>
        </div>

      </div>
    );
  }
}

export default App;