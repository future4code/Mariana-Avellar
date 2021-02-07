import React from "react";
import axios from "axios";

export default class CriarPlaylist extends React.Component {
  
  state = {
    listaPlaylistAdd: [],
    nomePlaylist: ""
  };

  onChangeInput = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  };

  componentDidMount() {
    this.pegarPlaylists();
  }
  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "mariana-avellar-muyembe"
          }
        }
      )
      .then((resposta) => this.setState({ listaPlaylistAdd: resposta.data.result.list }))
      .catch((erro) => console.log(erro));
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "mariana-avellar-muyembe"
          }
        }
      )
      .then(() => {
        this.setState({ nomePlaylist: "" });
        alert("Lista criada com sucesso!");
        this.pegarPlaylists();
      })
      .catch(() => {
        alert("Lista não foi crida");
      });
  };

  render() {

    const componentePlaylist = this.state.listaPlaylistAdd.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });

    return (
      <div className="app-container">
        
        <input
          placeholder={"Nome da playlist"}
          value={this.state.nomePlaylist}
          onChange={this.onChangeInput}
        />

        <button onClick={this.criarPlaylist}>Criar Playlist</button>

        {this.state.listaPlaylistAdd.length > 0 ? (
          <ul><li>{componentePlaylist}</li></ul>
        ) : (
          <p>Carregando...</p>
        )}

      </div>
    );
  }
}



