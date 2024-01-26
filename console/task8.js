
const onlyLongWords = (text) => {
	const foundWords = [];
	const words = text.split(' ');
	for (const word of words) {
		if (word.length >= 5) {
			foundWords.push(word);
		}
	}
	return foundWords.join(' ');
}

const onlyLongWords2 = (inputString) => {
  const longWords = inputString.match(/\b\w{5,}\b/g) || [];
  return longWords.join(' ');
};

const result = onlyLongWords('Welcome to Wikipedia the free encyclopedia that anyone can edit');
console.log(result);

console.log(onlyLongWords("The cat is on the table"));

console.log(onlyLongWords("not many long ones here"));

console.log(onlyLongWords("Write a function called addLeadingZero that takes an array of numbers in input and returns a new array containing the same numbers where if the number is only 1 digit long, a zero is added at the beginning. Also, the numbers in the final array should be strings."));

console.log('-------------------------');
const result2 = onlyLongWords('Welcome to Wikipedia the free encyclopedia that anyone can edit');
console.log(result2);

console.log(onlyLongWords("The cat is on the table"));

console.log(onlyLongWords("not many long ones here"));

console.log(onlyLongWords("Write a function called addLeadingZero that takes an array of numbers in input and returns a new array containing the same numbers where if the number is only 1 digit long, a zero is added at the beginning. Also, the numbers in the final array should be strings."));