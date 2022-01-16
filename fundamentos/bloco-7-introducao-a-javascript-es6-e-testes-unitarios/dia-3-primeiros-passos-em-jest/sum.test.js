const { sum, myRemove, myFizzBuzz,encode,decode } = require("./sum");


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
    expect("fizzbuzz").toBe(myFizzBuzz(15));
  });

  test("return fizz if number is divisible by  3", () => {
    expect("fizz").toBe(myFizzBuzz(9));
  });

  test("return buzz if number is divisible by 9", () => {
    expect("buzz").toBe(myFizzBuzz(25));
  });

  test("return the number if not divisible by either 3 or 5", () => {
    expect(7).toBe(myFizzBuzz(7));
  });

  test("return false if the parameter is not a number", () => {
    expect(false).toBe(myFizzBuzz("7"));
  });
});


 // ENCODE E DECODE

 describe('function encode e decode',()=>{

  test('if encode is a function', ()=>{
    expect(typeof encode).toBe('function');
  })

  test('if decode is a function', ()=>{
    expect(typeof decode).toBe('function');
  })

  test('if encode of faeiou return f12345', ()=>{
    expect(encode('faeiou')).toBe('f12345');
  })

  test('if decode of f12345 return faeiou', ()=>{
    expect(decode('f12345')).toBe('faeiou');
  })

  test('if the size of the message returned is the same as the message passed ', ()=>{
    const msg= 'teste de tamanho'
    expect(decode(msg).length).toBe(msg.length);
  })

  
 })