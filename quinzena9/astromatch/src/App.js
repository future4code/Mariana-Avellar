import React from "react";
import ProfileCard from "./components/ProfileCard";
import MatchScreen from "./components/MatchScreen";

 export default function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          ASTROMATCH
        </p>
      </header>
      <main>
      <ProfileCard 
          photo = {props.photo}
          name = {props.name}
          age = {props.age}
          bio = {props.bio}
      />
      </main>
    </div>
  );
}
