const reverseWords = (words) => {
	const desiredWords = [];
	for (const word of words) {
		desiredWords.push(word.split('').reverse().join(''));
	}
	return desiredWords;
}

const reverseWords2 = (words) => {
	// return (string) => string.split("").reverse().join("");
	// return words.map(m => m.split("").reverse().join(""))
	return words.map((string) => string.split("").reverse().join(""));
}


// do it with map


console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"])); // ["tac", "eohs", "eno", "sos", "olleh"]);
console.log(reverseWords2(["cat", "shoe", "one", "sos", "hello"])); // ["tac", "eohs", "eno", "sos", "olleh"]);