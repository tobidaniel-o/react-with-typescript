import React, { useState } from "react";
import List from "./components/List";
import logo from "./logo.svg";
import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Allergic to staying on the same team.",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
