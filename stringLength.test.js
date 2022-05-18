const { stringLength, reverseString, calculators, capitalizeString } = require('./mainFunctions.js');

test('strig1', () => {
  expect(stringLength('ahmad')).toBe(5);
});

test('string2', () => {
  expect(stringLength('ahmad zamir yousufi')).toBe('please check ypur string first');
});

test('reverseString', () => {
  expect(reverseString('hello')).toBe('olleh');
})

describe('calculators', () => {
  test('add', () => {
    expect(calculators.numAdd(1, 5)).toBe(6);
  });

  test('substract', () => {
    expect(calculators.numSubstract(6, 3)).toBe(3);
  });

  test('multiply', () => {
    expect(calculators.numMultiply(2, 4)).toBe(8);
  })
});

test('capitalize string', () => {
  expect(capitalizeString('ahmad')).toBe('Ahmad');
})