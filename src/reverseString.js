export { reverseString };

function reverseString(string) {
	if (string === undefined) {
		return;
	}
	let length = string.length;
	let reversedString = "";

	for (let i = length; i > 0; i--) {
		reversedString = reversedString + string[i - 1];
	}
	return reversedString;
}
