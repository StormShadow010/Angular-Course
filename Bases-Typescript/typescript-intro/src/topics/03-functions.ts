function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

const multiply = (
  firstNumber: number,
  secondNumber?: number,
  base: number = 2,
): number => {
  return firstNumber * base;
};

const result = addNumbers(5, 10);
const resultArrow = addNumbersArrow(5, 10);
const resultMultiply = multiply(5);
console.log(result);
console.log(resultArrow);
console.log(resultMultiply);

export {};
