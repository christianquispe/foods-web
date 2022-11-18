import { fireEvent, render, screen } from "@testing-library/react";

import LoginForm from "./index";

function setup() {
  render(<LoginForm />);
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

    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    fireEvent.change(passwordInputNode, { target: { value: "12345" } });

    expect(emailInputNode.getAttribute("value")).toMatch("testing");
    expect(passwordInputNode.getAttribute("value")).toMatch("12345");
  });
});
