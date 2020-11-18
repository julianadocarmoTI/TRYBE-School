/*  TDD
 4) A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número 
 for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna 
 "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível 
 por 3 ou 5 e retorna false caso num não seja um número.
    1) Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno 
    é o esperado ; 
    2) Faça uma chamada com um número divisível por 3 e verifique se o retorno
     é o esperado ;
    3) Faça uma chamada com um número divisível por 5 e verifique se o retorno 
    é o esperado ;
    4) Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique
     se o retorno é o esperado;
    5) Faça uma chamada com um parâmetro que não é um número e verifique se o 
    retorno é o esperado.

Copie as funções já implementadas e desenvolva os testes. Separe as funções em 
arquivos para evitar qualquer tipo de problema. */

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function'); //Testing if sum is a function
assert.strictEqual(sum(15), 'fizzbuzz'); //Task 1
assert.strictEqual(myFizzBuzz(9), 'fizz'); //Task 2
assert.strictEqual(myFizzBuzz(25), 'buzz'); //Task 3
assert.strictEqual(myFizzBuzz(4), 4); //Task 4
assert.strictEqual(myFizzBuzz('this'), false); //Task 5