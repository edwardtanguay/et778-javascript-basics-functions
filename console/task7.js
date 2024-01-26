const numbersDivisibleBy3 = (nums) => {
	const desiredNums = [];
	for (const num of nums) {
		if (num % 3 === 0) {
			desiredNums.push(num);
		}
	}
	return desiredNums;
}

const numbersDivisibleBy3_2 = (nums) => {
	return nums.filter(num => num % 3 === 0);
}

// higher-order functions
// filter
// map
// find
// forEach
// reduce
// sort 

console.log(numbersDivisibleBy3([1,2,3,4,5,6,7,8,9]));
console.log(numbersDivisibleBy3([2,4,8]));
console.log(numbersDivisibleBy3([9]));
console.log(numbersDivisibleBy3([5,8,24,25,29]));
console.log('---');
console.log(numbersDivisibleBy3_2([1,2,3,4,5,6,7,8,9]));
console.log(numbersDivisibleBy3_2([2,4,8]));
console.log(numbersDivisibleBy3_2([9]));
console.log(numbersDivisibleBy3_2([5,8,24,25,29]));