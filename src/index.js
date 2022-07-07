import readlineSync from 'readline-sync';

export const greetingMesssage = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
    return name;
}

export const gamePlay = (expression, correctAnswer, name) => {
    console.log('Question: ' + expression);
    const answer = readlineSync.question('Your answer: ');
	if (answer === correctAnswer) {
        console.log('Correct!');
        return answer == correctAnswer;
	}
	else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
        return answer === correctAnswer;
	}
}

export const randomNumber = (range = 100) => Math.floor(Math.random() * range);

export const randomMaths = () => {
    const mathsArray = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 2);
    return mathsArray[i];
}

export const congratulation = (counter, name) => {
    if (counter === 3) {
        console.log(`Congratulation, ${name}!`)
    }
}
