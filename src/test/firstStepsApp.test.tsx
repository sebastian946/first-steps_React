import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, afterAll, afterEach } from "vitest";
import { FirstStepsApp } from "../firstStepsApp";
import { ItemCounter } from "../shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props: unknown) => {
  return (
    <div
      data-testid="item-counter"
      //   name={props.name}
      //   quantity={props.quantity}
    />
  );
});

vi.mock("../shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("../shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="item-counter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("First Steps App", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);
    const itemCounterComponent = screen.getAllByTestId("item-counter");
    expect(itemCounterComponent.length).toBe(3);
  });

  test("Shouuld render itemcounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Playstation 5",
      quantity: 5,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Gameboy advance",
      quantity: 0,
    });
  });
});
