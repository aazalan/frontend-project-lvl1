import {
  greetingMesssage, gamePlay, randomNumber, randomMaths, congratulation,
} from './index.js';

export const evenGame = () => {
  const name = greetingMesssage();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  let isItCorrectAnswer = true;

  while (counter < 3 && isItCorrectAnswer === true) {
    const expression = randomNumber();
    const correctAnswer = (expression % 2) === 0 ? 'yes' : 'no';
    isItCorrectAnswer = gamePlay(expression, correctAnswer, name);
    counter += 1;
  }
  congratulation(counter, name);
};

export const calcGame = () => {
  const name = greetingMesssage();
  console.log('What is the result of the expression?');
  let counter = 0;
  let isItCorrectAnswer = true;

  while (counter < 3 && isItCorrectAnswer === true) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const mathSign = randomMaths();
    const strExpression = `${firstNumber} ${mathSign} ${secondNumber}`;
    let correctAnswer = 0;
    if (mathSign === '-') {
      correctAnswer = firstNumber - secondNumber;
    }
    if (mathSign === '+') {
      correctAnswer = firstNumber + secondNumber;
    }
    if (mathSign === '*') {
      correctAnswer = firstNumber * secondNumber;
    }
    isItCorrectAnswer = gamePlay(strExpression, String(correctAnswer), name);
    counter += 1;
  }
  congratulation(counter, name);
};

export const gcdGame = () => {
  const name = greetingMesssage();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  let isItCorrectAnswer = true;

  while (counter < 3 && isItCorrectAnswer === true) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const expression = `${firstNumber} ${secondNumber}`;
    let greatestDivisor = 1;
    for (let i = 0; i <= Math.min(firstNumber, secondNumber); i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        greatestDivisor = Math.max(greatestDivisor, i);
      }
    }
    if (firstNumber === 0 || secondNumber === 0) {
      greatestDivisor = Math.max(firstNumber, secondNumber);
    }
    isItCorrectAnswer = gamePlay(expression, String(greatestDivisor), name);
    counter += 1;
  }
  congratulation(counter, name);
};

export const progressionGame = () => {
  const name = greetingMesssage();
  console.log('What number is missing in the progression?');
  let counter = 0;
  let isItCorrectAnswer = true;

  while (counter < 3 && isItCorrectAnswer === true) {
    const progressionArray = [randomNumber()];
    const arrayLength = randomNumber(5) + 5;
    const progressionStep = randomNumber(9) + 1;
    for (let i = 0; i < arrayLength; i += 1) {
      progressionArray.push(progressionArray[i] + progressionStep);
    }
    const missedNumberIndex = randomNumber(arrayLength);
    const missedNumber = progressionArray[missedNumberIndex];
    progressionArray[missedNumberIndex] = '..';
    let expression = '';
    for (let j = 0; j <= arrayLength; j += 1) {
      expression = `${expression}${progressionArray[j]} `;
    }
    isItCorrectAnswer = gamePlay(expression, String(missedNumber), name);
    counter += 1;
  }
  congratulation(counter, name);
};

export const primeGame = () => {
  const name = greetingMesssage();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  let isItCorrectAnswer = true;

  while (counter < 3 && isItCorrectAnswer === true) {
    const expression = randomNumber();
    let correctAnswer = '';
    for (let i = 2; i < expression; i += 1) {
      if (expression % i === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }
    isItCorrectAnswer = gamePlay(expression, correctAnswer, name);
    counter += 1;
  }
  congratulation(counter, name);
};
