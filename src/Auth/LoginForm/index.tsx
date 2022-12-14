import { ChangeEventHandler, useState } from "react";
import { isEmailValid } from "../../utils/form";

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
    setDisableSubmit(!isCompleteForm(newVals) || !isEmailValid(newVals.email));
  };

  const isEmailInvalid =
    Boolean(formValues.email) && !isEmailValid(formValues.email);

  return (
    <section>
      <div className="w-full max-w-xs">
        {/* <div>
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
        </button> */}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo:
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                isEmailInvalid ? " border-red-500" : ""
              }`}
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Correo"
            />
            {Boolean(formValues.email) &&
              (isEmailValid(formValues.email) ? null : (
                <p className="text-red-500 text-xs italic">Correo no válido</p>
              ))}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onLogin(formValues);
              }}
              disabled={disableSubmit}
            >
              {submitText || "Enviar"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
