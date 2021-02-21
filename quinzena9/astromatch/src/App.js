import React from "react";
import ProfileCard from "./components/ProfileCard";
import MatchScreen from "./components/MatchScreen";

 export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ASTROMATCH
        </p>
      </header>
      <main>
      <ProfileCard 
          photo = {"https://picsum.photos/200/300"}
          name = {"Ilene"}
          bio = {"I like long walks by the beach and sunsets."}
      />
      </main>
    </div>
  );
}
