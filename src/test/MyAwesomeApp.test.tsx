import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import MyAwesomeApp from "../MyAwesomeApp";

describe("MyAwesomeApp Component", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Sebastian");
    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Duque");
  });
  test("Should render firstName and lastName using screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();
    const h1 = screen.getByTestId("firstName");
    expect(h1.innerHTML).toContain("Sebastian");
  });
});
