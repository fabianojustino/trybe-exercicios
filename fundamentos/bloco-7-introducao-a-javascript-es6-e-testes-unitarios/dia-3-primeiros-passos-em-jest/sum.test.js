const { sum, myRemove, myFizzBuzz } = require("./sum");


/* SUM */

describe("module sum parte 1", () => {
  test("sum of 4 e 5 = 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  test("sum of 0 e 0 = 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("is not a number, throw an error", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test("parameters must be numbers", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError("parameters must be numbers");
  });
});

/* MY REMOVE */

describe("module myRemove", () => {
  test("remove the number 1, expects[2,3,4] ", () => {
    const array = [1, 2, 3, 4];
    expect([2, 3, 4]).toEqual(myRemove(array, 1));
  });

  test("remove the number 3, expects[1,2,4] ", () => {
    const array = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(array, 3));
  });

  test("remove the number 5, expects[1,2,3,4] ", () => {
    const array = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemove(array, 5));
  });
});
