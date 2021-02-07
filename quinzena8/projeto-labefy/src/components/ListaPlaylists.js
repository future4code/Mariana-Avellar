import React from "react";
import axios from "axios";

export default class ListaPlaylists extends React.Component {
  
  state = {
    playlists: []
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  pegarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "mariana-avellar-muyembe"
          }
        }
      )
      .then((resposta) => this.setState({ playlists: resposta.data.result.list }))
      .catch((erro) => alert(erro.message));
  };

  deletarPlaylist = (id) => {
    axios
      .delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}",
        {
          headers: {
            Authorization: "mariana-avellar-muyembe"
          }
        }
      )
      .then(() => {
        alert("Playlist deletada com sucesso!");
        this.pegarPlaylist();
      })
      .catch((erro) => {
        alert(erro.message);
      });
  };
  

  render() {

    const listaPlaylists = this.state.playlists.map((item) => {
      return (
          <div>
            <div>{item.name}</div>
            <button onClick={() => {this.deletarPlaylist(item.id);}}>
              X
            </button>
          </div>
      );
    });

    return (
      <div className="lista-container">
        
        <p>Lista de Playlists</p>
        <div>{listaPlaylists}</div>

      </div>
    );
  }
}