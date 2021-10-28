import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { getCategories } from "../services/backend-service";

interface ClickFunction {
  onCategorySelected: (category: string) => void;
}

export function CategorySelectorComponent(props: ClickFunction): ReactElement {
  const [ categories, setCategories] = useState<string[]>([]);
  const [ selection, setSelection ] = useState('');

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  function onSelectionChanged(e: ChangeEvent<HTMLSelectElement>): void {
    setSelection(e.target.value);
  }

  return (
    <React.Fragment>
        <select value={selection} id="categorySelector" onChange={onSelectionChanged}>
          <option value="">all</option>
          {categories.map((categorie, index) => (
            <option value={categorie} key={index}>
              {categorie}
            </option>
          ))}
        </select>
      <button onClick={props.onCategorySelected.bind(null, selection)}>Get random fact!</button>
    </React.Fragment>
  );
}