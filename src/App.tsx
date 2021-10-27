import React, { useState } from "react";
import "./App.css";
import { Joke } from "./entities/joke";
import { FavoritesComponent } from "./pages/facts/components/favorites";
import { JokeViewComponent } from "./pages/facts/joke-container";

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);

  function addJoke(joke: Joke): void {
    if (!jokes.includes(joke)) {
      setJokes([...jokes, joke]);
    }
  }

  function removeJoke(id: number): void {
    jokes.splice(id, 1);
    setJokes([...jokes]);
  }

  return (
    <React.Fragment>
      <JokeViewComponent onAddToFavorites={addJoke}></JokeViewComponent>
      {jokes.length > 0 && (
        <div>
          <h1>Favorites</h1>
          <FavoritesComponent jokes={jokes} onRemoveItem={removeJoke}></FavoritesComponent>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
