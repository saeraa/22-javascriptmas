function panic(string) {
	return string.toUpperCase().split(" ").join(" 😱 ").concat("!");
}

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("Hello"));
