import React, { useState, useEffect } from "react";
import axios from "axios";

 const MatchScreen = (props) => {
  const [matchPhoto, setMatchPhoto] = useState([]);
  const [matchName, setMatchName] = useState([]);

  useEffect(() => {

    getMatches()

  }, []);

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-avellar/matches")
      .then(response => {
        setMatchPhoto(response.data.matches.photo);
        setMatchName(response.data.matches.name);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="screen-container">
      <header className="screen-header">
        <p>
          Match Screen
        </p>
      </header>
      <main className="screen-main">
        <div key={matchName.id}>{matchName.name}</div>
        <div key={matchPhoto.id}><img src={matchName.photo} /></div>
      </main>
    </div>
  );
}

export default MatchScreen;