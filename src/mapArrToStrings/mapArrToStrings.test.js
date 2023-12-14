const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("correct", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("mix", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "fees"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("empty array", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test("correct", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual(["1", "2", "3", "4"]);
  });
});
