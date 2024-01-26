const addLeadingZero = (nums) => {
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


console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12]));["00", "01", "02", "03", "10", "11", "12"];
console.log(addLeadingZero([1, 100]));["01", "100"];
console.log(addLeadingZero([1, 2, 3]));["01", "02", "03"];
console.log(addLeadingZero([-1, -12, 3]));