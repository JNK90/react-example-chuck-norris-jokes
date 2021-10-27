import React, { ReactElement } from "react";

interface Properties {
  categories: string[];
  created_at: string;
  value: string;
}

export function JokeComponent(props: Properties): ReactElement {
  return (
    <React.Fragment>
      <p>
        Categories:
        {props.categories.map(c => ` ${c}`)}
      </p>
      <p>Created at: {props.created_at}</p>
      <p>Value: {props.value}</p>
    </React.Fragment>
  );
}
