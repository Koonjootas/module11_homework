import { getPercents } from "./index.js";

describe("correctness of calculation", () => {
  it("50% of 150 is 75", () => {
    const result = getPercents(150, 50);
    expect(result).toBe(75);
  });
  it("validity of the first parameter of the function", () => {
    const result = getPercents("x", 50);
    expect(result).toBe(NaN);
  });
  it("validity of the second parameter of the function", () => {
    const result = getPercents(150, "x");
    expect(result).toBe(NaN);
  });
});

// ¯\_(ツ)_/¯ Больше ничего и не придумаешь
