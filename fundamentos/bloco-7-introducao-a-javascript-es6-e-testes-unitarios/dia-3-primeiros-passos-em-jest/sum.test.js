const { TestWatcher } = require('jest');
const {sum} = require('./sum');


describe('module sum',()=> {

test('test if the sum of 4 e 5 = 9',()=>{expect(sum(4,5)).toBe(9)});
test('test if the sum of 0 e 0 = 0',()=>{expect(sum(0,0)).toBe(0)});
test('throw an error if the user insert a value NAN',()=>{
  expect(()=>{sum(4,'5')}).toThrow();
});

test('verify if the message throw error if parameters must be numbers',()=>{
  expect(()=>{sum(4,'5')}).toThrowError('parameters must be numbers');
});

})