import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("Operation math", () => {
  test("Should add two positive numbers correctly", () => {
    const a = 1;
    const b = 3;
    const result = add(a, b);
    expect(result).toBe(a + b);
  });

  test("Should subtract two numbers correctly", () => {
    const a = 5;
    const b = 2;
    const result = subtract(a, b);
    expect(result).toBe(a - b);
  });
  test("Should add negative numbers correctly", () => {
    const a = -2;
    const b = -3;
    const result = add(a, b);
    expect(result).toBe(a + b);
  });

  test("Should subtract resulting in negative number correctly", () => {
    const a = -2;
    const b = -5;
    const result = subtract(a, b);
    expect(result).toBe(a - b);
  });

  test("Should multiply two numbers correctly", () => {
    const a = 4;
    const b = 5;
    const result = multiply(a, b);
    expect(result).toBe(a * b);
  });

  test("Should multiply by zero correctly", () => {
    const a = 7;
    const b = 0;
    const result = multiply(a, b);
    expect(result).toBe(0);
  });
});
