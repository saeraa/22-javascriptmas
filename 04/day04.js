function whisper(string) {
	if (string.endsWith("!")) {
		string = string.substring(0, string.length - 1);
	}
	return "shh.. " + string.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
