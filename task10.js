
const cutStrings = (texts, num) => {
	const desiredTexts = [];
	for (const text of texts) {
		desiredTexts.push(`${text.substring(0,num)}...`);
	}
	return desiredTexts;
}




console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 10));//["Hello my n...", "Today is q...", "Cats are t...", "This movie..."]
console.log(cutStrings(["Hello my name is Max", "Today is quite sunny outside", "Cats are the best", "This movie is boring"], 2));//["He...", "To...", "Ca...", "Th..."]

console.log(cutStrings(['nnn'],2));