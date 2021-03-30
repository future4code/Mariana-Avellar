import React, { useState, useEffect } from "react";
import axios from "axios";
import chooseIcon from "../img/choose-icon.svg"
import cancelIcon from "../img/cancel-icon.svg"
import MatchScreen from "./MatchScreen";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana-avellar";

const ProfileCard = (props) => {

  const [profile, setProfile] = useState({});
  const [idProfile, setIdProfile] = useState("");
  const [match, setMatch] = useState({});
  const [matchId, setMatchId] = useState("");
  const [choice, setChoice] = useState(true);
  const [matchScreen, setMatchScreen] = useState(false);

  useEffect(() => {

    getProfileToChoose()

  }, []);

  const choosePerson = () => {

    const body = {
      id: setMatchId,
      choice: setChoice
    };

    axios
      .post(`${baseUrl}/choose-person`, body, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        setMatch(response.data.profile);
        setMatchId(response.data.id);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const getProfileToChoose = () => {
    axios
      .get(`${baseUrl}/person`)
      .then(response => {
        setProfile(response.data.profile);
        setIdProfile(response.data.id);
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <div className="card-container">
      <header className="card-header">
        <p>
          Profile Cards
        </p>

        <div key={profile.id}><img src={profile.photo}/></div>
        <div key={profile.id}>{profile.name}</div>
        <div key={profile.id}>{profile.age}</div>
        <div key={profile.id}>{profile.bio}</div>

      </header>
      <footer className="card-footer">
        <button onClick={choosePerson}><img src={chooseIcon}/></button>
        <button onClick={getProfileToChoose}><img src={cancelIcon}/></button>

        <div><button>Ir para tela de matches</button></div>
      
      </footer>
    </div>
  );
}

export default ProfileCard;