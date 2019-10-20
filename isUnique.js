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
