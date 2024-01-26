const durationInHours = (nums) => {
	const desiredNums = [];
	for (const num of nums) {
		desiredNums.push(Math.floor(num/60));
		// desiredNums.push(Number(Math.floor((num/60)).toFixed(0)));
	}
	return desiredNums;
}

console.log(durationInHours([120, 60, 80, 90, 100])); // [2, 1, 1, 1, 1]

console.log(durationInHours([50, 20, 180])); // [0, 0, 3]