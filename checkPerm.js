/**
 * Given two strings, write a method to check if one is a permutation of the other.
 * Remember that a permutation is bascally something that is compose of the same characters but in many possible orders. A combination cares about the ordering.
 * Evidence of this is from STATs where NCR is divided by k! possibilities.
 * @param {string} str1 first string
 * @param {string} str2 second string
 * @return {boolean} returns true if str1 is a perm of str2 and false otherwise.
 */
const checkPerm = function(str1, str2) {
	// It cannot be a permutation if the length differs.
	if (str1.length !== str2.length) return false;

	// The most obvious way to do this is probably keep a JS object for memory and populate the count for each character. Then check with the second string to see if the counts are the same.
	// That means you need to keep an object for both counts.

	// This is compiled during runtime, not dynamically allocated memory.
	const str1Count = {};
	const str2Count = {};

	// Populate the char counts for each.
	for (let char of str1) {
		if (str1Count[char] === undefined) {
			str1Count[char] = 1;
		} else str1Count[char]++;
	}

	for (let char of str2) {
		if (str2Count[char] === undefined) {
			str2Count[char] = 1;
		} else str2Count[char]++;
	}

	// Now we just compare each. If it falls out of the loop then we have succeeded.
	for (let char in str1Count) {
		// Iterating through each key of the object.
		if (str1Count[char] !== str2Count[char]) return false;
	}

	console.log('Yeah we got it');
	return true;
};

checkPerm('somedog', 'godeos');

// Official
const permutation = function(s, t) {
	if (s.length !== t.length) return false;

	// Makes dynamic memory for array with 128 4 byte memory blocks. Assumption.
	// This is bad in JS because there is no point in creating a block of memory when it can be done before runtime.
	let letters = new Array(128);

	// Now she is converting the string into an array. Use a split function.
	let s_array = s.split('');

	// Remember that a forEach method does not work well with returns.
	s_array.forEach((char) => {
		// Illegal operation. You cannot index using a character. Doesn't make sense. Maybe in Java?
		letters[char]++;
	});

	for (let i = 0; i < t.length; i++) {
		// ASCII representation of the character?
		let c = t[i].charCodeAt(0);
		letters[c]--;
		if (letters[c] < 0) {
			return false;
		}
	}

	return true;
};

// Official logic remains the same but you cannot access an integer array using a character so this code doesn't make sense in this context. It uses the ASCII value and decrements the count instead which is valid.
