import readlineSync from 'readline-sync';

export default () =>{
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;

while (counter < 3) {
	    let randomNumber = Math.floor(Math.random() * 100);
	    console.log('Question: '+ randomNumber);
	    const answer = readlineSync.question('Your answer: ');

	    if (randomNumber % 2 === 0) {
		            if (answer == 'yes') {
				                console.log('Correct!');
				            }
		            else {
				                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
				                break;
				            } 
		        }

	    if (randomNumber % 2 !== 0) {
		            if (answer == 'no') {
				                console.log('Correct!');
				            }
		            else {
				                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
				                break;
				            }
		        }
	    counter += 1;
}
if (counter === 3) {
	    console.log(`Congratulations, ${name}!`);
}
}
