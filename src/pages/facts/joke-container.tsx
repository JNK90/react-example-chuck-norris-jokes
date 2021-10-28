import React, { ReactElement, useState } from "react";
import { Joke } from "../../entities/joke";
import { CategorySelectorComponent } from "./components/category-selector";
import { FavoritesComponent } from './components/favorites';
import { JokeComponent } from "./components/joke";
import { getJoke } from "./services/backend-service";


export function JokeViewComponent(props: {subscriber: string}): ReactElement {
  const [joke, setJoke] = useState<Joke>();
  const [jokes, setJokes] = useState<Joke[]>([]);

  function addJoke(j: Joke): void {
    if (!jokes.includes(j)) {
      setJokes([...jokes, j]);
    }
  }

  function removeJoke(id: number): void {
    jokes.splice(id, 1);
    setJokes([...jokes]);
  }

  function onSelect(categorie: string): void {
    getJoke(categorie).then(setJoke);
  }

  return (
    <React.Fragment>
      <CategorySelectorComponent
        onCategorySelected={onSelect}
      ></CategorySelectorComponent>
      {joke && (
        <React.Fragment>
          <JokeComponent
            categories={joke.categories}
            created_at={joke.created_at}
            value={joke.value}
          ></JokeComponent>
          <button onClick={addJoke.bind(null, joke)}>
            Add to Favorites
          </button>
        </React.Fragment>
      )}
      {jokes.length > 0 && (
        <div>
          <h1>Favorites</h1>
          <FavoritesComponent jokes={jokes} onRemoveItem={removeJoke}></FavoritesComponent>
        </div>
      )}
      {props.subscriber && <button>{props.subscriber} HAS SUBSCRIBED</button>}
    </React.Fragment>
  );
}
