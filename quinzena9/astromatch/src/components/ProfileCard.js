import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

 const ProfileCard = (props) => {

  const [profile, setProfile] = useState({});

  useEffect(() => {

      axios
        .get(
          `${baseUrl}/mariana-avellar/person`
        )
        .then( response => setProfile( response.data.result.list ))
        .catch( error => console.log(error))
      

  }, [baseUrl, setProfile]);

  return (
    <div className="card-container">
      <header className="card-header">
        <p>
          Profile Cards
        </p>

        <div key={profile.id}>{profile.photo}</div>
        <div key={profile.id}>{profile.name}</div>
        <div key={profile.id}>{profile.age}</div>
        <div key={profile.id}>{profile.bio}</div>

      </header>
    </div>
  );
}

export default ProfileCard;