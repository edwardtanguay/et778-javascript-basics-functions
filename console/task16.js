const sumEvenOdd = (nums) => {
	let evenSum = 0;
	let oddSum = 0;

	for (const num of nums) {
		num % 2 === 0 ? (evenSum += num) : (oddSum += num);
	}

	return [evenSum, oddSum];
};

const sumEvenOdd2 = (nums) => {
	let evenSum = 0;
	let oddSum = 0;

	for (const num of nums) {
		evenSum += num % 2 === 0 ? num : 0;
		oddSum += num % 2 === 0 ? 0 : num;
	}

	return [evenSum, oddSum];
};

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));  // [12, 9]
console.log(sumEvenOdd([0, -2, 11]));  // [-2, 11]
console.log(sumEvenOdd([1, 3, 15]));  // [0, 19]
console.log('---');
console.log(sumEvenOdd2([1, 2, 3, 4, 5, 6]));  // [12, 9]
console.log(sumEvenOdd2([0, -2, 11]));  // [-2, 11]
console.log(sumEvenOdd2([1, 3, 15]));  // [0, 19]