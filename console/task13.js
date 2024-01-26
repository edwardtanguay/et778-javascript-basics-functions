const countConsonants = (text) => {
	const consonants = 'bcdfghjklmnpqrstvwxz';
	// by
	// a, e, i, o, u and sometimes y
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		const letter = text[i];
		// if(letter === 'b' || letter === 'd' || letter === 'f')
		if (consonants.includes(letter.toLowerCase())) {
			count++;
		}
	}
	return count;
}

function countConsonants2(inputString) {
    const consonantsRegex = /[^aeiou\s\d\W_]/gi; // Regular Expression für Konsonanten
    const consonantsMatches = inputString.match(consonantsRegex);
    return consonantsMatches ? consonantsMatches.length : 0;
}

// AUFGABE 13;
console.log(countConsonants("hello")); // 3
console.log(countConsonants("aeiou")); // 0
console.log(countConsonants("be right back")); // 8
console.log(countConsonants("JavaScript")); // 7
console.log('-----');
console.log(countConsonants2("hEllo...")); // 3
console.log(countConsonants2("aeiou")); // 0
console.log(countConsonants2("be right back")); // 8
console.log(countConsonants2("JavaScript")); // 7