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



/* MY FIZZ BUZZ */

describe("module myFizzBuzz", () => {
  test("return fizzBuzz if number is divisible by  3 and 5", () => {
    expect("fizzbuzz").toEqual(myFizzBuzz(15));
  });

  test("return fizz if number is divisible by  3", () => {
    expect("fizz").toEqual(myFizzBuzz(9));
  });

  test("return buzz if number is divisible by 9", () => {
    expect("buzz").toEqual(myFizzBuzz(25));
  });

  test("return the number if not divisible by either 3 or 5", () => {
    expect(7).toEqual(myFizzBuzz(7));
  });

  test("return false if the parameter is not a number", () => {
    expect(false).toEqual(myFizzBuzz("7"));
  });
});
