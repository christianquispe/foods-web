import { ChangeEventHandler, useState } from "react";
import { validateEmail } from "../../utils/form";

export interface OnLoginArgs {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onLogin: (values: OnLoginArgs) => void;
  submitText?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, submitText }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  const isCompleteForm = (values: OnLoginArgs): boolean => {
    const valuesArr = Object.values(values);
    const valuesLenght = valuesArr.length;
    return valuesArr.filter((val) => val !== "").length === valuesLenght;
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    const newVals = { ...formValues, [name]: value };
    setFormValues(newVals);
    setDisableSubmit(!isCompleteForm(newVals) || !validateEmail(newVals.email));
  };

  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {Boolean(formValues.email) &&
            (validateEmail(formValues.email) ? null : (
              <span>Correo no válido</span>
            ))}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onLogin(formValues);
          }}
          disabled={disableSubmit}
        >
          {submitText || "Enviar"}
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
