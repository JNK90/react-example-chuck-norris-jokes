import React, { ReactElement } from 'react';

interface Properties {
    id: number;
    categories: string [];
    created_at: string;
    joke: string;
    onRemoveItem: (id: number) => void; 
}

export function JokeListItemComponent(props: Properties): ReactElement {
    return (
        <tr>
            <td>{props.categories.map(c => ` ${c}`)}</td>
            <td>{props.created_at}</td>
            <td>{props.joke}</td>
            <td><button onClick={props.onRemoveItem.bind(null, props.id)}>X</button></td>
        </tr>
    );
}