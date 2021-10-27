import { ChangeEvent, ReactElement } from "react";

interface Properties {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export function InputFormFieldComponent(props: Properties): ReactElement {
  return (
    <div>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
      ></input>
    </div>
  );
}
