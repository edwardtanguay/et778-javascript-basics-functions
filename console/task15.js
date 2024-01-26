const countByColor = (texts) => {
	let redCount = 0;
	let yellowCount = 0;
	let greenCount = 0;

	for (const text of texts) {

		// this works but one usually has only values after the ? and : in a ternary
		// text.includes('Red') ? redCount++ : '';
		// text.includes('Yellow') ? yellowCount++ : '';
		// text.includes('Green') ? greenCount++ : '';

		redCount += text.toLowerCase().includes('red') ? 1 : 0;
		yellowCount += text.toLowerCase().includes('yellow') ? 1 : 0;
		greenCount += text.toLowerCase().includes('green') ? 1 : 0;
	}
	return [redCount, yellowCount, greenCount];
} 

console.log(countByColor(["Red pen", "Yellow shirt"])); // [1, 1, 0]
console.log(countByColor(["red pen", "Yellow shirt", "Green salad"])); // [1, 1, 1]
console.log(countByColor(["Pink hair", "Blue sky"])); // [0, 0, 0]
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); // [0, 2, 1]