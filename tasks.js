export const task7_numbersDivisibleBy3 = (nums) => {
	console.log(nums);
	const desiredNums = [];
	for (const num of nums) {
		if (num % 3 === 0) {
			desiredNums.push(num);
		}
	}
	return desiredNums;
	// return nums.filter(num => num % 3 === 0);
}


export const task8_onlyLongWords = (text) => {
	const foundWords = [];
	const words = text.split(' ');
	for (const word of words) {
		if (word.length >= 5) {
			foundWords.push(word);
		}
	}
	return foundWords.join(' ');
}

export const task8_onlyLongWords2 = (inputString) => {
  const longWords = inputString.match(/\b\w{5,}\b/g) || [];
  return longWords.join(' ');
};

export const task9_addLeadingZero = (nums) => {
	const desiredNums = [];
	for (const num of nums) {
		if (num < 10 && num >= 0) {
			desiredNums.push(`0${num}`);
		} else {
			desiredNums.push(String(num))
		}
	}
	return desiredNums;
}; 