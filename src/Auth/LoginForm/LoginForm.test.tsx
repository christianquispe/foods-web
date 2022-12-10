import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm, { LoginFormProps } from "./index";

function setup(props?: LoginFormProps) {
  render(<LoginForm onLogin={props?.onLogin || ((vals) => console.log(vals))} {...props} />);
}

describe("<LoginForm />", () => {
  it("should render", () => {
    setup();
  });

  it("should render labels", () => {
    setup();
    expect(screen.getByText("Correo:")).toBeInTheDocument();
    expect(screen.getByText("Contraseña:")).toBeInTheDocument();
  });

  it("Inputs should have labels", () => {
    setup();
    expect(screen.getByLabelText("Correo:").getAttribute("name")).toBe("email");
    expect(screen.getByLabelText("Contraseña:").getAttribute("name")).toBe(
      "password"
    );
  });

  it("Inputs should accept text", () => {
    setup();

    const emailInputNode = screen.getByLabelText("Correo:");
    const passwordInputNode = screen.getByLabelText("Contraseña:");

    expect(emailInputNode.getAttribute("value")).toMatch("");
    expect(passwordInputNode.getAttribute("value")).toMatch("");

    const errorMessageNode = screen.queryByText("Correo no válido");

    expect(errorMessageNode).not.toBeInTheDocument()

    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    fireEvent.change(passwordInputNode, { target: { value: "12345" } });

    expect(emailInputNode.getAttribute("value")).toMatch("testing");
    expect(passwordInputNode.getAttribute("value")).toMatch("12345");

    const errorMessageNodeAgain = screen.getByText("Correo no válido");
    expect(errorMessageNodeAgain).toBeInTheDocument();

    fireEvent.change(emailInputNode, { target: { value: "test@yopmail.com" } });

    expect(errorMessageNode).not.toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    setup({ onLogin: mockFn });

    const emailInputNode = screen.getByLabelText("Correo:");
    const passwordInputNode = screen.getByLabelText("Contraseña:");

    expect(emailInputNode.getAttribute("value")).toMatch("");
    expect(passwordInputNode.getAttribute("value")).toMatch("");

    const buttonNode = screen.getByRole("button");

    await user.click(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(0);

    expect(buttonNode).toBeDisabled()
    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(buttonNode).toBeDisabled()
    fireEvent.change(passwordInputNode, { target: { value: "12345" } });
    expect(buttonNode).toBeDisabled()
    fireEvent.change(emailInputNode, { target: { value: "test@yopmail.com" } });
    expect(buttonNode).not.toBeDisabled()

    await user.click(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({email: "test@yopmail.com", password: "12345"});
  });
});
