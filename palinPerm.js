/**
 * Given a string check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. So it should have a count of 2 for every character except possibly 1.
 * I think the best check is probably to ignore the whitespaces and check if the count is correct.
 * @param {string} str is some string that we need to check if a perm of a palindrome.
 * @return {boolean} returns true if perm of palindrome, false otherwise.
 */
const palinPerm = function(str) {
	// So make an object that can store all the character counts and then iterate at the end to see if every char count is 2 with a flag for the one exception.

	// Populate the character count.
	const charCount = {};
	for (let char of str) {
		if (charCount[char] === undefined) charCount[char] = 1;
		else charCount[char]++;
	}

	// Need a flag for the one exception.
	let flag = false;

	for (let char of charCount) {
		if (flag && charCount[char] != 2) {
			return false;
		} else if (charCount[char] == 1 && flag == false) {
			flag = true;
		}
	}

	return true;
};

// I'm wrong about this one. Should be even and odd checking with modulus.
