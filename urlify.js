/**
 * Write a method to replace all spaces in a string with '%20'.
 * Seems like I can just use a replace function with regex pattern of space.
 * From the example it seems like I need to trim whitespace before operating on the string.
 * 
 * @param {string} str input string
 * @return {string} the string should just replace whitespace with %20.
 */
const urlify = function(str) {
	// Trim the white space of the given string. If you didn't have methods for this, you would do a basic for loop and iterate backwards until you encounter a character.
	let trimEndAmount = 0;
	for (let i = str.length - 1; i > -1; i--) {
		if (str[i] === '') trimEndAmount += 1;
		else break;
	}

	// You would do the same for the front.

	// Slice is exclusive end parameter.
	let trimmedString = str.slice(0, str.length - trimEndAmount);

	console.log(trimmedString.replace(/ /g, '%20'));
	return trimmedString.replace(/ /g, '%20');
};

urlify('the cat and dog   ');

// Need to refresh my memory on regex material.

// Official
const replaceSpaces = function(str, trueLength) {
	let spaceCount = 0;
	let i = 0;
	let index;

	// Okay so just counter number of spaces.
	for (i; i < trueLength; i++) {
		if (str[i] === ' ') spaceCount++;
	}

	// Why multiply by 2?
	index = trueLength + spaceCount * 2;
	// Not really applicable in JS because no null terminating necessary.
	if (trueLength < str.length) str[trueLength] = '\0';
	for (i = trueLength - 1; i >= 0; i--) {
		if (str[i] === ' ') {
			str[index - 1] = '0';
			str[index - 2] = '2';
			str[index - 3] = '%';
			index = index - 3;
		} else {
			str[index - 1] = str[i];
			index--;
		}
	}
};

// Okay this solution does it in place by iterating backwards to avoid capacity problems.
