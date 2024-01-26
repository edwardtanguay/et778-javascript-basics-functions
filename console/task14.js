const sumEvenNumbers = (nums) => {
	let sum = 0;
	for (const num of nums) {
		if (num % 2 === 0) {
			sum += num;
		}
	}
	return sum;
}

const sumEvenNumbers2 = (nums) => {
	let sum = 0;
	for (const num of nums) {
		sum += num % 2 === 0 ? num : 0;
	}
	return sum;
}

const sumEvenNumbers3 = (nums) => {
	return nums.reduce((sum, num) => {
		const add = num % 2 === 0 ? num : 0;
		return sum + add;
	}, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([100])); // 100
console.log(sumEvenNumbers([100, 1, 3])); // 100
console.log(sumEvenNumbers([-2, 4, 3])); // 2 
console.log('---');
console.log(sumEvenNumbers2([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers2([100])); // 100
console.log(sumEvenNumbers2([100, 1, 3])); // 100
console.log(sumEvenNumbers2([-2, 4, 3])); // 2 
console.log('---');
console.log(sumEvenNumbers3([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers3([100])); // 100
console.log(sumEvenNumbers3([100, 1, 3])); // 100
console.log(sumEvenNumbers3([-2, 4, 3])); // 2 