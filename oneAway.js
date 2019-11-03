/**
 * There are 3 edits performed on a string: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one or zero edits away.
 * So the edits show what actually happens. One distinction that can be made is that if the string length is the same we know it is a replacement. If the str is 1 more then it's an insertion. If the str length is 1 less, then it is a removal.
 * The order matters, so it's best to use pointer logic for each character.
 * 
 * @param {string} first is the first string.
 * @param {string} second is the second string.
 * @return {boolean} true if it is one away, false otherwise.
 */
const testReplacement = function(first, second) {
	// Allow one boolean flag and iterate using a counter.

	let differentCharFlag = false;

	for (let i = 0; i < first.length; i++) {
		if (first[i] !== second[i] && differentCharFlag) {
			console.log('replace failure');
			return false;
		} else if (first[i] !== second[i] && !differentCharFlag) {
			differentCharFlag = true;
		} else if (first[i] === second[i]) {
			console.log('continue with iteration');
		}
	}

	console.log('replacement works, also handles same string');

	return true;
};

const testInsertion = function(first, second) {
	// If you encounter a difference, only move the one pointer and leave the other the same. Make a boolean flag on this instance so that it doesn't occur again.

	// The logic is inserting something into the first string to get the second string. That means we should move the move the second pointer.

	// console.log(`the second string is ${second} with length ${second.length}`);

	let differentCharFlag = false;
	let i = 0;
	let j = 0;

	// iteration will end when j = second.length
	while (j < second.length) {
		console.log('iteration occurs');
		console.log(`the j is ${j} and the length is ${second.length}`);
		if (first[i] !== second[j] && differentCharFlag) {
			console.log('insert failure');
			return false;
		} else if (first[i] !== second[j] && !differentCharFlag) {
			// Only iterate the second pointer since the string is bigger and then repeat the comparison.
			j++;
		} else if (first[i] === second[i]) {
			i++;
			j++;
		}

		console.log('none of the options');
	}

	console.log('good insertion');

	return true;
};

const testRemoval = function(first, second) {
	// Same as insertion but move the pointer for the other string.

	let i = 0;
	let j = 0;
	let differentCharFlag = false;

	// iteration will stop when the i = first.length b/c first string longer.
	while (i < first.length) {
		if (first[i] !== second[j] && differentCharFlag) {
			console.log('removal failure');
			return false;
		} else if (first[i] !== second[j] && !differentCharFlag) {
			// first string longer only move first pointer.
			i++;
		} else if (first[i] === second[j]) {
			i++;
			j++;
		}
	}

	console.log('good removal');

	return true;
};

const oneAway = function(first, second) {
	console.log(`The first string is ${first} and the second string is ${second}...`);
	// Make the distinction between the three cases.
	if (first.length === second.length) {
		// Test for replacement.
		return testReplacement(first, second);
	} else if (first.length === second.length - 1) {
		// Test for insertion.
		return testInsertion(first, second);
	} else if (first.length === second.length + 1) {
		// Test for removal.
		return testRemoval(first, second);
	} else {
		// If the lengths don't compare in these cases they cannot be 1 edit away.
		return false;
	}
};

// Will it mess up because I didn't prototype the functions above oneAway function? Does JS auto prototype in this case? Hoisting occurs so the declaration is on top but the assignment is not.

oneAway('pale', 'palde');
