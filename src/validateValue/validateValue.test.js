const validateValue = require("./validateValue");

test("value validation", () => {
  expect(validateValue(50)).toBe(true);
});

describe("validateValue", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("less than correct", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("more than correct", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("up border", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("down border", () => {
    expect(validateValue(0)).toBe(false);
  });
});
