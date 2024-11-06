export { capitalize };

function capitalize(word) {
	let capitalizedWord;
	if (word) {
		capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
	}
	return capitalizedWord;
}
