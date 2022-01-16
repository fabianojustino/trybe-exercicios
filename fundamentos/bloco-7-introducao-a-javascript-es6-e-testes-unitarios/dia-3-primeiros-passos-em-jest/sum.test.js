const { sum, myRemove, myFizzBuzz,encode,decode,techList,hydrate,searchEmployee} = require("./sum");


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


 // ENCODE E DECODEgit 
 describe('function encode e decode',()=>{

  test('if encode and decode is a function', ()=>{
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function'); 
  })

  it('test return of encode and decode', ()=>{  
    expect(encode('faeiou')).toBe('f12345');  
    expect(decode('f12345')).toBe('faeiou');
  })
  

  test('if the size of the message returned is the same as the message passed ', ()=>{
    const msg= 'teste de tamanho';
    expect(decode(msg).length).toBe(msg.length);
  })
  
 })




/*techList highTech */


describe('function techList', () => {

  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML'], 'Lucas')).toEqual([
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }      
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


// FUNCTION HYDRATE

describe('function hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });

  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });

});

 /* SEARCH EMPLOYEE */


 describe('function searchEmployee',()=>{

  it('its a function or exists', ()=>{
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  })

  it('search by in and return a specialty', ()=>{
    expect(searchEmployee('8579-6','firstName')).toBe('Ana');
  })

  it('if the id not exists throw an error', ()=>{
    expect(()=>
        searchEmployee('8579-4')
    ).toThrowError(new Error('Id não identificada'))
 })


  it('if specialities by id not exists throw an error', ()=>{
    expect(()=>  searchEmployee('8579-6','specialitiess')
    ).toThrow((new Error('Informação indisponível')))
  })

 })