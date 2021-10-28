import { FormEvent, ReactElement, useState } from "react";
import { InputFormFieldComponent } from "./components/input-form-field";
import { useValidation } from './hooks/useValidation';
import { containsOnlyLetters, isEmail } from './services/validation';

export interface NewsletterForm {
  firstname: string;
  lastname: string;
  email: string;
}

interface Properties {
  submitFn: (formData: NewsletterForm) => void; 
}

export function NewsletterContainerComponent(props: Properties): ReactElement {
  const [formState, setFormState] = useState<NewsletterForm>({
    email: '',
    lastname: '',
    firstname: ''
  });

  const isFirstnameValid = useValidation(formState.firstname, [containsOnlyLetters]);
  const isLastnameValid = useValidation(formState.lastname, [containsOnlyLetters]);
  const isEmailValid = useValidation(formState.email, [isEmail]);

  function submitForm(e: FormEvent | MouseEvent) {
    e.preventDefault();
    console.log(formState);
    if (isFirstnameValid && isLastnameValid && isEmailValid) {
      props.submitFn(formState);
    }
  }

  return (
    <form onSubmit={submitForm}>
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
      <button onClick={submitForm}>Subscribe</button>
    </form>
  );
}
