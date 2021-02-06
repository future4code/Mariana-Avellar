import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    usuarios: [
      {
        nome: "",
        email: ""
      }
    ],

    valorInputNome: "",
    valorInputEmail: ""
  };

  componentDidMount = () => {
    this.criarUsuarioApi();
  };

  criarUsuarioApi = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Autorization: "Mariana-Avellar-Muyembe"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  adicionarUsuario = () => {
    const novoUsuario = {
      nome: this.state.valorInputNome,
      email: this.state.valorInputEmail
    };

    const novosUsuarios = [...this.state.usuarios, novoUsuario];

    this.setState({ usuarios: novosUsuarios });
    this.setState({ valorInputNome: "" });
    this.setState({ valorInputEmail: "" });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <p>
          {usuario.nome} - {usuario.email}
        </p>
      );
    });

    return (
      <div className="App-container">
        <header className="App-header">
          <button>Exibir lista de usuários</button>
        </header>

        <main className="App-main">
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"E-mail"}
          />
          <button onClick={this.adicionarUsuario}>SALVAR</button>
        </main>

        <footer className="App-footer">
          <div>{listaDeUsuarios}</div>
        </footer>
      </div>
    );
  }
}

export default App;
