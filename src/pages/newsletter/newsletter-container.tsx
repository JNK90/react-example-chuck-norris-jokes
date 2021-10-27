import { ReactElement, useState } from "react";
import { InputFormFieldComponent } from "./components/input-form-field";

interface NewsletterForm {
  firstname: string;
  lastname: string;
  email: string;
}

export function NewsletterContainerComponent(): ReactElement {
  const [formState, setFormState] = useState<NewsletterForm>({
    email: "",
    lastname: "",
    firstname: "",
  });

  return (
    <form>
      <InputFormFieldComponent
        label="firstname"
        value={formState.firstname}
        onChange={(firstname: string) =>
          setFormState({ ...formState, firstname })
        }
      ></InputFormFieldComponent>
      <InputFormFieldComponent
        label="lastname"
        value={formState.lastname}
        onChange={(lastname: string) =>
          setFormState({ ...formState, lastname })
        }
      ></InputFormFieldComponent>
      <InputFormFieldComponent
        label="email"
        value={formState.email}
        onChange={(email: string) => setFormState({ ...formState, email })}
      ></InputFormFieldComponent>
      <button>Subscribe</button>
    </form>
  );
}
