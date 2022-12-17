const kittyScores = [
	[39, 99, 76],
	89,
	98,
	[87, 56, 90],
	[96, [95]],
	40,
	[78, 50, [63]]
];

const kittyPrizes = [
	["💰", "🐟", "🐟"],
	"🏆",
	"💐",
	"💵",
	["💵", "🏆"],
	["🐟", ["💐", "💐"]],
	"💵",
	"💵",
	["🐟"],
	"🐟"
];

function flatten(arr) {
	const newArr = [];

	function check(arr) {
		arr.forEach((item) => {
			if (item instanceof Array) {
				check(item);
			} else {
				newArr.push(item);
			}
		});
	}

	check(arr);

	// return arr.flat();

	return newArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
