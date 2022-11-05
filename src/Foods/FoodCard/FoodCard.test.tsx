import { render, screen } from "@testing-library/react";

import FoodCard from "./index";

function setup() {
  render(
    <FoodCard
      name="Arroz con pato"
      description="Alguna description"
      tags={["sano", "rapido"]}
      img="abc"
    />
  );
}

describe("FoodCard", () => {
  it("Should render", () => {
    setup();
    expect(screen.getAllByRole("listitem")).toHaveLength(2)
    expect(screen.getByRole("heading")).toHaveTextContent('Arroz con pato')
    expect(screen.getByText("Alguna description")).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'abc')
  });
});
