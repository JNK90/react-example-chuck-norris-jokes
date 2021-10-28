import { ReactElement, useState } from "react";
import { InputFormFieldComponent } from "./components/input-form-field";
import { useValidation } from './hooks/useValidation';
import { containsOnlyLetters, isEmail } from './services/validation';

interface NewsletterForm {
  firstname: string;
  lastname: string;
  email: string;
}

export function NewsletterContainerComponent(): ReactElement {
  const [formState, setFormState] = useState<NewsletterForm>({
    email: '',
    lastname: '',
    firstname: ''
  });

  const isFirstnameValid = useValidation(formState.firstname, [containsOnlyLetters]);
  const isLastnameValid = useValidation(formState.lastname, [containsOnlyLetters]);
  const isEmailValid = useValidation(formState.email, [isEmail]);

  return (
    <form>
      <InputFormFieldComponent
        label="firstname"
        value={formState.firstname}
        onChange={(firstname: string) =>
          setFormState({
            ...formState,
            firstname: firstname,
          })
        }
        isValid={isFirstnameValid}
      ></InputFormFieldComponent>
      <InputFormFieldComponent
        label="lastname"
        value={formState.lastname}
        onChange={(lastname: string) =>
          setFormState({
            ...formState,
            lastname: lastname,
          })
        }
        isValid={isLastnameValid}
      ></InputFormFieldComponent>
      <InputFormFieldComponent
        label="email"
        value={formState.email}
        onChange={(email: string) =>
          setFormState({
            ...formState,
            email: email,
          })
        }
        isValid={isEmailValid}
      ></InputFormFieldComponent>
      <button>Subscribe</button>
    </form>
  );
}
