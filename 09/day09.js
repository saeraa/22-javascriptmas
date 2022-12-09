function capitalizeWord(word) {
	return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function toTitleCase(str) {
	let arr = str.split(" ");

	let newString = "";
	arr.forEach((w, i) => {
		let end = i == arr.length - 1 ? "." : " ";
		newString += capitalizeWord(w) + end;
	});

	return newString;
}

console.log(capitalizeWord("pUMpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
