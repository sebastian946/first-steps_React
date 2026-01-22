import { expect, test } from "vitest";
import { add } from "./math.helper";

test("Should add two positive numbers correctly", () => {
  const a = 1;
  const b = 3;
  const result = add(a, b);
  expect(result).toBe(a + b);
});
