import { greetingMesssage, gamePlay, randomNumber, randomMaths, congratulation } from "./index.js";

export const evenGame = () => {
    const name = greetingMesssage();
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let counter = 0;
    let isItCorrectAnswer = true;
    while (counter < 3 && isItCorrectAnswer == true) {
        const expression = randomNumber();
        const correctAnswer = (expression % 2) === 0 ? 'yes' : 'no';
        isItCorrectAnswer = gamePlay(expression, correctAnswer, name);
        counter += 1;
    }
    congratulation(counter, name);
}


export const calcGame = () => {
    const name = greetingMesssage();
    console.log('What is the result of the expression?');
    let counter = 0;
    let isItCorrectAnswer = true;
    
    while (counter < 3 && isItCorrectAnswer == true) {
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
}