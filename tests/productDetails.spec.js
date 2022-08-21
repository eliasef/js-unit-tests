const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBeTruthy();
  })
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2)
  })
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool gel', 'Mascara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Mascara')[1]).toBe('object');
  })
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const teste = productDetails('Alcool gel', 'Máscara');
    expect(teste[0] !== teste[1]).toBe(true)
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    let caminho = productDetails('param1', 'param2');
    const string1 = caminho[0].details.productId.endsWith('123');
    const string2 = caminho[1].details.productId.endsWith('123');
    expect(string1 && string2).toBe(true)
  })
});
