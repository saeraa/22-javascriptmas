function isPalindrome(str) {
	return (
		str == str.toLowerCase().split("").reverse().join(",").replace(/,/g, "")
	);
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
