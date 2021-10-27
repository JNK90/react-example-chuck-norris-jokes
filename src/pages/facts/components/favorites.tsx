import React, { ReactElement } from "react";
import { Joke } from "../../../entities/joke";
import { JokeListItemComponent } from "./joke-list-item";

interface Propterties {
  jokes: Joke[];
  onRemoveItem: (id: number) => void;
}

export function FavoritesComponent(props: Propterties): ReactElement {

  return (
    <table>
      <tr>
        <th>Categories</th>
        <th>Created at</th>
        <th>Fact</th>
        <th>Action</th>
      </tr>
      {props.jokes.map((joke, i) => (
        <JokeListItemComponent
          key={i}
          id={i}
          categories={joke.categories}
          created_at={joke.created_at}
          joke={joke.value}
          onRemoveItem={props.onRemoveItem.bind(null, i)}
        ></JokeListItemComponent>
      ))}
    </table>
  );
}
