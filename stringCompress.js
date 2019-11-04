/**
 * Implement a method to perform string compression using the count of repeated characters. The example is that aabcccccaaa would be a2b1c5a3.
 * The stirng only has uppercase and lowercase letters.
 * I would make a new string and add to that empty string only if the current temporary is not equal to the current character we detect. We should keep a count of that specific character and add to the final string only when the character match fails.
 * 
 * @param {string} str is the input string.
 * @return {string} is the compressed string.
 */
const stringCompress = function(str) {
	// We need an empty string to populate during iteration.
	let compStr = '';

	// We need a temp character to check with current and a counter.
	let tempChar = '';
	let counter = 0;

	// The condition where the character and counter are reset is when the tempChar differs with current char in iteration. Otherwise we just increase count. If it fails, then we should append to the compStr the tempChar and the current counter, then reset the counter and update the tempChar.
	// You also need to handle the last case though.
	str.split('').forEach((char) => {
		console.log('char is', char);
		if (tempChar !== char) {
			compStr += tempChar;

			if (counter !== 0) compStr += counter.toString();

			// reset the values...
			counter = 1;
			tempChar = char;
		} else if (tempChar === char) {
			counter++;
		}
	});

	if (counter !== 0) {
		compStr += tempChar;
		compStr += counter;
	}

	if (str.length === compStr.length / 2) {
		console.log(str);
		return str;
	} else {
		console.log(compStr);
		return compStr;
	}
};

stringCompress('aabcccccaaa');
console.log('\n');
stringCompress('some dog here');
