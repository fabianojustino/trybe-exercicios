const { TestWatcher } = require('jest');
const { uppercase } = require('./exercise7');
const { getPokemonDetails } = require('./exercise8');

/* 
test("verifica se a funcao transforma a string em Uppercase", (done)=>{

  uppercase('test', (strToUpper) => {
   try {
     expect(strToUpper).toBe('TEST');
     done();
   } catch (error) {
     done(error);
   }
  });
});


describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
  
    const msgError = new Error('Não temos esse pokémon para você :(');

    const callback = (error, _result) => {
      expect(error).toEqual(msgError);
      done();
    }

   // getPokemonDetails((pokemon) => pokemon.name === 'pikachuu', callback)
   
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {

    const pok = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (_error, result) => {
      expect(result).toBe(pok);
      done();
    }   

   // getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);    
    
  });
});

 */

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

