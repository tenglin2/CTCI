/**
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 * One way of doing this is by maintaining an object that keeps the count of each character. Then as we loop through each character in the input, if the count is 1, then return false. Otherwise we continue and if the loop completes we return true.
 * 
 * @param {string} input
 * @return {boolean} should return true if unique or false if not. 
 */
const isUnique = function(input) {
	// characterCount will store the number of occurrences of each character.
	const characterCount = {};

	// You can convert the string into an array using .split method or Array.from(). The reason for that is because array iteration is a lot better and there are more useful methods.
	// Instead we can just use a for of loop since strings are iterable.
	for (let char of input) {
		if (characterCount[char] === undefined) {
			characterCount[char] = 1;
		} else if (characterCount[char] === 1) {
			return false;
		}
	}

	// I don't think it is even necessary to use integers as the properties for the object since we only need a flag to trigger 1 time.
	return true;
};

console.log(isUnique('doog'));

// Book
// If assume that the string is ASCII then there are only a possible of 128 possible characters. That means if the string length is greater than 128, then there must be a duplicate somewhere and we can immediately return false.
// Created a boolean array of 128 characters and loops through the string. Uses a charAt method with the index on the string to specify character.

const isUniqueChars = function(str) {
	if (str.length > 128) return false;

	// Dynamically allocate 128 blocks of memory for each character.
	const charSet = new Array(128);

	for (let i = 0; i < str.length; i++) {
		let val = str.charAt(i);

		// This will be undefined in the array if not already accessed.
		if (charSet[val]) return false;
		charSet[val] = true;
	}

	return true;
};

console.log(isUniqueChars('doog'));
