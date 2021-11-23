const letterStr = (letters) => {
	let alphabet = {
    'a': '.-',   
		'b': '-...', 
    'c': '-.-.',
		'd': '-..',  
		'e':'.',    
		'f':'..-.', 
		'g':'--.',  
		'h':'....', 
		'i':'..',   
		'j':'.---', 
    'l':'.-..',
		'k':'-.-',  
		'm':'--',   
		'n':'-.',   
		'o':'---',  
		'p':'.--.', 
		'q':'--.-', 
		'r':'.-.',  
		's':'...',  
		't':'-',    
		'u':'..-',  
		'v':'...-', 
		'w':'.--',  
		'x':'-..-', 
		'y':'-.--', 
		'z':'--..'
}
	const letterArr = letters.split("");
	console.log(letterArr);
	const morseCode = letterArr.map((letter) => alphabet[letter]);
	const morseCodes = morseCode.join(" ");
	return morseCodes;
	
};

const codeStr = (mCode) => {
	const morseCoding = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
}

	const morseArr = mCode.split(" ");
	const alphabetCharacters = morseArr.map((char) => morseCoding[char]);
	const englishText = alphabetCharacters.join("");
	return englishText;
};

const userInput = document.querySelector('#user__input');
const submit = document.querySelector('.submit');
const translation = document.querySelector('#translation');
const clear = document.querySelector('.clear');

const displayTranslation = (words) => {
	if (userInput.value) {
		words = userInput.value;
		translation.innerHTML = letterStr(words);
	} else if (translation.value) {
		words = translation.value;
		userInput.innerHTML = codeStr(words);
	}
};
submit.addEventListener('click', displayTranslation);

clear.addEventListener('click', () => {
	translation.value = "";
	userInput.value = "";
	clear()
})
