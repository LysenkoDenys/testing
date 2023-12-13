const square = require("./square");

describe("square", () => {
  // invoke before each test:
  beforeEach(() => {
    // add to db
  });
  // invoke 1 time before tests:
  beforeAll(() => {
    mockValue = Math.random();
  });
  test("correct value 2", () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1); // pow method is called 1 time
  });
  test("correct value 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0); // pow method is called 0 time because of square(1)
  });
  // invoke after each test:
  afterEach(() => {
    // delete from db
    jest.clearAllMocks(); // mocks are accumulating so we soul clear them
  });
  // invoke 1 time after tests:
  afterAll(() => {});
});
