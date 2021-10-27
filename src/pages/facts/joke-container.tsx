import React, { ReactElement, useState } from "react";
import { Joke } from "../../entities/joke";
import { CategorySelectorComponent } from "./components/category-selector";
import { JokeComponent } from "./components/joke";
import { getJoke } from "./services/backend-service";

interface Properties {
  onAddToFavorites: (joke: Joke) => void;
}

export function JokeViewComponent(props: Properties): ReactElement {
  const [joke, setJoke] = useState<Joke>();

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
          <button onClick={props.onAddToFavorites.bind(null, joke)}>
            Add to Favorites
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
