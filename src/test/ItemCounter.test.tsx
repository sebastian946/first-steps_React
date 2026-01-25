import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "../shopping-cart/ItemCounter";

describe("ItemCounter Component", () => {
  test("Should render with default values", () => {
    const name = "test item";
    render(<ItemCounter name={name} />);
    expect(screen.getByText(name)).toBeDefined();
  });

  test("Should render with default values - custom quantity", () => {
    const name = "test item";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should increase count when +1 button is clicked", () => {
    const name = "test item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    const [buttonAdd] = screen.getAllByRole("button");
    fireEvent.click(buttonAdd);
    expect(screen.getByText(quantity + 1)).toBeDefined();
  });

  test("Should decrease count when -1 button is pressed", () => {
    const name = "decrease item";
    const quantity = 6;
    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttondecrease] = screen.getAllByRole("button");
    fireEvent.click(buttondecrease);
    expect(screen.getByText(quantity - 1)).toBeDefined();
  });

  test("Should not decrease count when -1 button is pressed and quantity is 1", () => {
    const name = "decrease item minus";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    const [, buttondecrease] = screen.getAllByRole("button");
    fireEvent.click(buttondecrease);
    expect(screen.getByText(0)).toBeDefined();
  });

  test("Should change ro red when count is 1", () => {
    const name = "color item";
    const quantity = 1;
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("red");
  });

  test("Should change to black when count is greater than 1", () => {
    const name = "color item";
    const quantity = 2;
    render(<ItemCounter name={name} quantity={quantity} />);
    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("black");
  });
});
