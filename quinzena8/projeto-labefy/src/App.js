import React from "react";

import CriarPlaylist from "./components/CriarPlaylist";
import ListaPlaylists from "./components/ListaPlaylists";

export default class App extends React.Component {
  
  state = {
    playlistCriada: true
  }

  mudarPagina = () => {
    this.setState({ playlistCriada: !this.state.playlistCriada})
  }

  render() {
    return (
      <div className="app-container">
        
       <p>HOME PAGE</p>
       <button onClick={this.mudarPagina}>{this.state.playlistCriada ?"Ir para lista de playlists" : "Criar nova playlist"}</button>
        {this.state.playlistCriada ? <CriarPlaylist/> : <ListaPlaylists/>}

      </div>
    );
  }
}



