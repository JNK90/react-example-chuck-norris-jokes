import { ReactElement } from 'react';

interface Properties {
    name: string;
    onClick: (route: unknown) => void;
}

export function RouteComponent(props: Properties): ReactElement {
    return <div onClick={props.onClick}>{props.name}</div>;
}