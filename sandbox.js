/**
 * Playground for testing
 */

// How do I accept standard input without using node? Is it possible with JS? You have to run the program using node runtime and then it should work.
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let someName = 'bob';

// This saves the input to someName variable, but this happens asynchronously so the console log performs before that. THat means someName will be undefined unless you compute inside the scope of the readline.
someName = rl.question('What is your name?', (name) => {
	someName = name;
	console.log(`Hi ${name}`);
	rl.close();
});

// This is done asynchronously so this triggers before the rl thing is done.
console.log(someName);
