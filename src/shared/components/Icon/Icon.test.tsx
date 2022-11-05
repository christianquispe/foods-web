import { render, screen } from "@testing-library/react";
import { IconsId } from "./index.d";

import { Icon } from "./";

describe("<Icon />", () => {
  it("should render", () => {
    const altText = "Icono de la red social LinkedIn";
    render(<Icon alt={altText} id={IconsId.ArchiveActive} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(altText);
  });
});
